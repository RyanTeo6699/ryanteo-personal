import { useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CapabilityMapSection } from './components/CapabilityMapSection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ThinkingSection } from './components/ThinkingSection';
import {
  capabilities,
  getCapabilitiesForProject,
  getCapabilityById,
  getProjectById,
  getProjectsForCapability,
  projects,
} from './data/homepage-data';

type ActiveSelection =
  | {
      type: 'project';
      id: string;
    }
  | {
      type: 'capability';
      id: string;
    }
  | null;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => {
      mediaQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  return prefersReducedMotion;
}

export default function App() {
  const [activeSelection, setActiveSelection] = useState<ActiveSelection>(null);
  const workRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mapProjectRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const capabilityRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const canvasRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  let activeProjectIds: string[] = [];
  let activeCapabilityIds: string[] = [];

  if (activeSelection?.type === 'capability') {
    activeProjectIds = getProjectsForCapability(activeSelection.id).map((project) => project.id);
    activeCapabilityIds = [activeSelection.id];
  }

  if (activeSelection?.type === 'project') {
    activeProjectIds = [activeSelection.id];
    activeCapabilityIds = getCapabilitiesForProject(activeSelection.id).map(
      (capability) => capability.id,
    );
  }

  useEffect(() => {
    if (activeSelection?.type !== 'capability') {
      return;
    }

    const [firstProjectId] = activeProjectIds;
    if (!firstProjectId) {
      return;
    }

    const projectNode = workRefs.current[firstProjectId];
    if (!projectNode) {
      return;
    }

    projectNode.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }, [activeProjectIds, activeSelection, prefersReducedMotion]);

  const toggleProject = (projectId: string) => {
    setActiveSelection((current) => {
      if (current?.type === 'project' && current.id === projectId) {
        return null;
      }

      return {
        type: 'project',
        id: projectId,
      };
    });
  };

  const toggleCapability = (capabilityId: string) => {
    setActiveSelection((current) => {
      if (current?.type === 'capability' && current.id === capabilityId) {
        return null;
      }

      return {
        type: 'capability',
        id: capabilityId,
      };
    });
  };

  const activeSummary =
    activeSelection?.type === 'project'
      ? `Active project: ${getProjectById(activeSelection.id)?.title ?? 'Project'}`
      : activeSelection?.type === 'capability'
        ? `Active capability: ${
            getCapabilityById(activeSelection.id)?.label ?? 'Capability'
          }`
        : 'Select a project or capability to trace how the work connects.';

  return (
    <main className="homepage">
      <HeroSection />
      <SelectedWorkSection
        projects={projects}
        activeProjectIds={activeProjectIds}
        hasSelection={activeSelection !== null}
        onProjectSelect={toggleProject}
        workRefs={workRefs}
      />
      <CapabilityMapSection
        projects={projects}
        capabilities={capabilities}
        activeProjectIds={activeProjectIds}
        activeCapabilityIds={activeCapabilityIds}
        hasSelection={activeSelection !== null}
        activeSummary={activeSummary}
        onProjectSelect={toggleProject}
        onCapabilitySelect={toggleCapability}
        onReset={() => setActiveSelection(null)}
        canvasRef={canvasRef}
        mapProjectRefs={mapProjectRefs}
        capabilityRefs={capabilityRefs}
        prefersReducedMotion={prefersReducedMotion}
      />
      <ThinkingSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
