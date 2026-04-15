import { useLayoutEffect, useState } from 'react';
import type { MutableRefObject, RefObject } from 'react';

type ActiveKind = 'project' | 'skill' | null;

type ConnectorOverlayProps = {
  canvasRef: RefObject<HTMLDivElement>;
  projectRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
  skillRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
  activeKind: ActiveKind;
  activeProjectIds: string[];
  activeSkillIds: string[];
  prefersReducedMotion: boolean;
};

type ConnectorLine = {
  id: string;
  path: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

function buildConnectorPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) {
  const verticalDistance = Math.abs(endY - startY);
  const controlOffset = Math.max(28, Math.min(120, verticalDistance * 0.45));

  return `M ${startX} ${startY} C ${startX} ${startY + controlOffset} ${endX} ${
    endY - controlOffset
  } ${endX} ${endY}`;
}

export function ConnectorOverlay({
  canvasRef,
  projectRefs,
  skillRefs,
  activeKind,
  activeProjectIds,
  activeSkillIds,
  prefersReducedMotion,
}: ConnectorOverlayProps) {
  const [lines, setLines] = useState<ConnectorLine[]>([]);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const updateLines = () => {
      const canvasRect = canvas.getBoundingClientRect();
      setBounds({
        width: canvasRect.width,
        height: canvasRect.height,
      });

      if (
        activeKind === null ||
        activeProjectIds.length === 0 ||
        activeSkillIds.length === 0 ||
        canvasRect.width < 768
      ) {
        setLines([]);
        return;
      }

      const nextLines: ConnectorLine[] = [];

      activeProjectIds.forEach((projectId) => {
        const projectNode = projectRefs.current[projectId];

        if (!projectNode) {
          return;
        }

        const projectRect = projectNode.getBoundingClientRect();

        activeSkillIds.forEach((skillId) => {
          const skillNode = skillRefs.current[skillId];

          if (!skillNode) {
            return;
          }

          const skillRect = skillNode.getBoundingClientRect();
          const upperRect = projectRect.top <= skillRect.top ? projectRect : skillRect;
          const lowerRect = projectRect.top <= skillRect.top ? skillRect : projectRect;
          const startX = upperRect.left + upperRect.width / 2 - canvasRect.left;
          const startY = upperRect.bottom - canvasRect.top;
          const endX = lowerRect.left + lowerRect.width / 2 - canvasRect.left;
          const endY = lowerRect.top - canvasRect.top;

          nextLines.push({
            id: `${projectId}-${skillId}`,
            path: buildConnectorPath(startX, startY, endX, endY),
            startX,
            startY,
            endX,
            endY,
          });
        });
      });

      setLines(nextLines);
    };

    updateLines();

    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(updateLines);
    });

    observer.observe(canvas);

    Object.values(projectRefs.current).forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    Object.values(skillRefs.current).forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    window.addEventListener('resize', updateLines);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLines);
    };
  }, [
    canvasRef,
    activeKind,
    activeProjectIds,
    activeSkillIds,
    projectRefs,
    skillRefs,
  ]);

  if (bounds.width === 0 || bounds.height === 0) {
    return null;
  }

  return (
    <svg
      className="connector-overlay"
      width={bounds.width}
      height={bounds.height}
      viewBox={`0 0 ${bounds.width} ${bounds.height}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="connector-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(184,107,42,0.16)" />
          <stop offset="50%" stopColor="rgba(184,107,42,0.76)" />
          <stop offset="100%" stopColor="rgba(227,171,94,0.2)" />
        </linearGradient>
      </defs>
      {lines.map((line) => (
        <g key={line.id}>
          <path className="connector-path-base" d={line.path} pathLength={1} />
          <path
            className="connector-path-active"
            d={line.path}
            pathLength={1}
            style={
              prefersReducedMotion
                ? undefined
                : {
                    animationDuration: '540ms',
                  }
            }
          />
          <circle className="connector-node" cx={line.startX} cy={line.startY} r={4} />
          <circle className="connector-node" cx={line.endX} cy={line.endY} r={4} />
        </g>
      ))}
    </svg>
  );
}
