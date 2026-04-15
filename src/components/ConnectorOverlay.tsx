import { useLayoutEffect, useState } from 'react';
import type { MutableRefObject, RefObject } from 'react';

type ConnectorOverlayProps = {
  canvasRef: RefObject<HTMLDivElement>;
  projectRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
  capabilityRefs: MutableRefObject<Record<string, HTMLButtonElement | null>>;
  activeProjectIds: string[];
  activeCapabilityIds: string[];
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
  const controlOffset = Math.max(24, Math.min(88, verticalDistance * 0.42));

  return `M ${startX} ${startY} C ${startX} ${startY + controlOffset} ${endX} ${
    endY - controlOffset
  } ${endX} ${endY}`;
}

export function ConnectorOverlay({
  canvasRef,
  projectRefs,
  capabilityRefs,
  activeProjectIds,
  activeCapabilityIds,
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
        activeProjectIds.length === 0 ||
        activeCapabilityIds.length === 0 ||
        canvasRect.width < 720
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

        activeCapabilityIds.forEach((capabilityId) => {
          const capabilityNode = capabilityRefs.current[capabilityId];

          if (!capabilityNode) {
            return;
          }

          const capabilityRect = capabilityNode.getBoundingClientRect();
          const upperRect =
            projectRect.top <= capabilityRect.top ? projectRect : capabilityRect;
          const lowerRect =
            projectRect.top <= capabilityRect.top ? capabilityRect : projectRect;
          const startX = upperRect.left + upperRect.width / 2 - canvasRect.left;
          const startY = upperRect.bottom - canvasRect.top;
          const endX = lowerRect.left + lowerRect.width / 2 - canvasRect.left;
          const endY = lowerRect.top - canvasRect.top;

          nextLines.push({
            id: `${projectId}-${capabilityId}`,
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

    Object.values(capabilityRefs.current).forEach((node) => {
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
    activeProjectIds,
    activeCapabilityIds,
    projectRefs,
    capabilityRefs,
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
                    animationDuration: '360ms',
                  }
            }
          />
          <circle className="connector-node" cx={line.startX} cy={line.startY} r={3.5} />
          <circle className="connector-node" cx={line.endX} cy={line.endY} r={3.5} />
        </g>
      ))}
    </svg>
  );
}
