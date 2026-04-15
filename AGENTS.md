# AGENTS.md

## Mission
Build a relationship-driven portfolio section for Ryan’s personal site.

This section is not a generic portfolio block. It is a structured interaction system:
- top = project / experience cards
- bottom = skills / capabilities cards
- click = reveal relationships
- active states + scroll + connectors = the core value

The purpose is to communicate capability through interaction, not through a static list.

---

## Product Intent

The section must express:
- systems thinking
- execution ability
- product-building range
- technical and strategic depth
- a high-signal personal brand

It must not look like:
- a junior developer resume
- a copied portfolio template
- a random animated landing page toy
- a Dribbble-style mockup with weak logic

This section should make users feel:
“this person connects capabilities to shipped work.”

---

## Non-Negotiables

1. Do not copy external site content
- No reused names
- No reused text
- No reused logos
- No reused claims
- No fake employment or company history

2. Do not reduce this to static decoration
- The relationship map is the product
- The click behavior is mandatory
- Highlighting logic is mandatory
- Scroll-to-related behavior is mandatory

3. Do not hardcode layout assumptions that break easily
- Especially for connector lines
- Avoid brittle magic numbers
- Avoid fixed-coordinate line drawing tied to one screen size only

4. Do not widen scope
- No blog system
- No CMS
- No dark/light theme re-architecture unless already required
- No unrelated new sections
- No overbuilt page transitions

5. Preserve coherence with the existing website
- Match typography rhythm
- Match spacing system
- Match card radius and shadows
- Match general color logic
- This section must feel integrated, not pasted in

---

## Core UX Rules

### A. Skill-first interaction
When a skill/capability card is clicked:
- It becomes active
- Related project cards become active
- Unrelated project cards visually recede
- Unrelated skill cards also recede slightly
- The viewport scrolls smoothly to the first related project
- Connector lines animate in

### B. Project-first interaction
When a project card is clicked:
- It becomes active
- Related skill cards become active
- Other cards recede appropriately
- Connector lines reflect the relationship

### C. Reset behavior
- Clicking the active item again may reset the state
- Or provide a minimal reset control
- Reset must be obvious and clean

### D. Hover behavior
- Hover adds slight elevation and affordance
- Hover must not overpower active state
- Motion must stay controlled and purposeful

---

## Information Architecture Rules

### Top layer: projects / experience
Use 3–6 cards max.
Each card should communicate:
- title
- short context
- one-sentence summary
- relationship to capabilities

Good examples of content direction:
- AI product systems
- iOS app execution
- web platform architecture
- workflow design
- automation / ops logic
- strategic product thinking

### Bottom layer: skills / capabilities
Use 6–12 cards.
Prefer capability framing over low-level tech-only framing.

Better:
- AI Workflow Design
- Product Systems
- SwiftUI / iOS
- Next.js / Web
- Automation
- Strategy
- Shipping
- LLM Productization

Weaker:
- a giant pile of random languages with no narrative

Low-level technologies may appear, but the section should still present a capability graph, not a stack dump.

---

## Data Model Rules

The section must be data-driven.

Use a normalized structure such as:

```ts
type Skill = {
  id: string
  label: string
  shortLabel?: string
  level?: string
  relatedProjectIds: string[]
}

type Project = {
  id: string
  title: string
  eyebrow?: string
  summary: string
  tags?: string[]
  relatedSkillIds: string[]
}
```

Rules:
- No duplicated relationship truth scattered across components
- No inline repeated JSX data blobs
- Relationship logic should come from one source of truth
- IDs must be stable and readable

---

## Connector System Rules

Connector lines are important, but they are not the source of truth.
The source of truth is the relationship mapping.

Preferred implementation:
- SVG overlay
- compute positions from DOM refs
- render lines dynamically based on active relationships

Must support recalculation on:
- initial render
- resize
- active state change
- meaningful layout changes

Do not rely on:
- purely decorative dashed borders pretending to connect elements
- static absolute-position line divs for the main behavior
- one-screen-only measurements

Graceful fallback is acceptable on small screens:
- reduce line complexity
- hide lines on very narrow mobile widths if needed
- preserve highlighting + scroll behavior even without visible lines

---

## Styling Rules

The look should be:
- sharp
- premium
- minimal
- technical
- controlled
- original

Do:
- use strong hierarchy
- use clean card geometry
- use restrained accent color
- use subtle active glows/shadows
- maintain high readability

Do not:
- over-animate
- over-glow everything
- use noisy gradients everywhere
- make cards look like unrelated template components
- create visual chaos

The interaction should feel deliberate, not flashy.

---

## Accessibility Rules

Every interactive card must be keyboard reachable.
Use proper semantics:
- button
- or clearly accessible equivalent

Must include:
- focus-visible states
- sufficient contrast
- readable text in active and inactive states

Do not hide meaning only inside connector lines.
The highlighting itself must communicate the relationship.

---

## Responsive Rules

### Desktop
- full relationship experience
- visible connectors
- clear top/bottom separation
- enough spacing for lines to breathe

### Tablet
- preserve the model
- connectors may simplify
- cards may reorder but relationships must remain understandable

### Mobile
- readability first
- stack layout cleanly
- active states still work
- scroll-to-related still works
- connectors may degrade or disappear if necessary

Mobile must not become broken desktop.

---

## Engineering Rules

- Keep components modular
- Keep state ownership clear
- Avoid prop drilling chaos
- Prefer explicit helpers for relationship lookup
- Reuse current utilities in the repo where appropriate
- Do not introduce unnecessary dependencies
- Keep code readable and maintainable

Likely component split:
- RelationshipMapSection
- ProjectCard
- SkillCard
- ConnectorOverlay
- relationship-data

Likely logic split:
- state / refs in parent
- rendering and styling in cards
- measurements and line rendering in overlay
- mapping helpers in utilities or data module

---

## Definition of Done

The sprint is only done when all of the following are true:

1. Clicking a skill highlights related projects
2. Clicking a project highlights related skills
3. Smooth scroll to first related project works
4. Connector lines render correctly on desktop
5. Non-related cards visually recede
6. Data is structured and centralized
7. Layout remains coherent on desktop, tablet, and mobile
8. The section feels integrated with the site
9. No copied external content is present
10. Build passes without broken imports or obvious runtime issues

---

## Output Rules for Codex

When finishing the sprint, always provide:
1. Brief summary
2. Updated file tree
3. Full contents of all modified/new files
4. Relationship data explanation
5. Verification steps
6. Any responsive caveats

Do not provide partial diffs only.
Do not omit modified files.
Do not leave hidden assumptions unexplained.

---

## Final Principle

Do not build “a section that looks similar.”
Build “a relationship-driven portfolio module that demonstrates capability through interaction.”
