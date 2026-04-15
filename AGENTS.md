# AGENTS.md

## Mission
Build Ryan’s personal website as a high-signal personal brand site.

The site must merge:
- the minimalist editorial calm of the chosen reference direction
- Ryan’s own projects, thinking, and execution identity
- a relationship-driven capability map that connects skills/capabilities to selected work

This is not a generic portfolio.
This is not a startup landing page.
This is not an agency site.

The product being presented is Ryan himself:
- his judgment
- his work
- his systems thinking
- his technical execution
- his product philosophy

---

## Core Product Positioning

The site should communicate one thing clearly:

Ryan builds AI products, systems, and leverage.

Everything on the site must reinforce that positioning.

The site should feel:
- personal
- sharp
- editorial
- modern
- controlled
- technically credible
- strategically opinionated

It must not feel:
- corporate
- overdesigned
- noisy
- template-like
- decorative
- like a junior developer résumé
- like an agency selling services

---

## Primary Goals

1. Establish immediate identity
- Who Ryan is
- What he builds
- What kind of work he does

2. Show proof through selected work
- real projects
- real product direction
- real capability signals

3. Show how Ryan thinks
- product philosophy
- execution philosophy
- AI/product/system beliefs

4. Create a memorable interaction layer
- capability-to-project relationship map
- click a capability -> reveal linked work
- interaction should reinforce structure and competence

5. Create clean conversion paths
- work
- contact
- external profiles
- future collaboration

---

## Structural Requirements

The homepage should contain these sections in this order unless the repo strongly suggests a better equivalent:

1. Hero
2. Selected Work
3. Capability Map
4. Thinking / Thesis
5. About
6. Contact

Do not add extra filler sections unless they clearly improve the site.

Do not add:
- testimonials
- fake client logos
- pricing
- service packages
- meaningless stats
- decorative timelines with no narrative value

---

## Section Rules

### 1. Hero
Hero must be extremely clear and restrained.

Required content:
- Ryan
- one-line positioning
- short supporting paragraph
- two CTAs

Recommended positioning:
- Building AI products, systems, and leverage.

Hero should feel immediate and confident.
Do not make it verbose.
Do not bury the value proposition.

### 2. Selected Work
This is one of the two most important sections.

Use real projects as the main proof layer:
- ImmiPilot
- Shiok
- You Wife List
- Bento AIII

Each card/item should communicate:
- project name
- short one-line positioning
- Ryan’s role or angle
- related capabilities

Do not overload the homepage with full case studies.
Keep it tight, high-signal, and scannable.

### 3. Capability Map
This is the main interaction differentiator.

It must include:
- a set of capability cards
- a set of linked project cards
- click behavior that reveals relationships
- active states
- scroll-to-related behavior
- visual relationship indicators
- graceful fallback on smaller screens

This section must communicate that Ryan’s abilities are not isolated tools.
They are part of systems that connect to shipped work.

Recommended capability set:
- Product Systems
- AI Workflow Design
- SwiftUI / iOS
- Next.js / Web
- Automation
- Strategy
- Execution
- LLM Productization

### 4. Thinking / Thesis
This section must make Ryan feel like someone with judgment, not just implementation ability.

Use short, strong statements.
Not motivational fluff.
Not startup clichés.

Examples of direction:
- I do not build generic AI wrappers.
- Advice is easy to copy. Execution is harder.
- Good products reduce friction before they add features.
- A moat is built through workflow, retention, and accumulated structure.

Format should be concise and editorial.

### 5. About
Short, focused, human.
Not a life story.
Not a résumé dump.

The About section should answer:
- what Ryan works on
- what he cares about
- how he approaches product and systems

### 6. Contact
Minimal, direct, useful.

Include only high-value links such as:
- Email
- GitHub
- LinkedIn
- X

No bloated footer link farms.

---

## Design Direction

The chosen visual direction is:
- editorial minimalism
- high contrast
- strong typography
- generous spacing
- restrained interactivity
- subtle personality
- calm but sharp composition

The site should borrow the spirit of minimalist editorial personal sites:
- clean navigation
- strong name-first identity
- simple content hierarchy
- list/grid balance
- quiet confidence

But it must be rebuilt around Ryan’s own content and interaction model.

Do not copy:
- exact layouts pixel for pixel
- exact wording
- exact compositions
- exact card arrangements
- exact color proportions
- exact brand tone

Translate the style.
Do not imitate the artifact.

---

## Visual Rules

### Typography
Typography carries a large part of the design.
It must feel deliberate.

Use:
- strong heading scale
- restrained body copy
- clear hierarchy
- generous line spacing
- crisp contrast

Avoid:
- giant blocks of text
- too many font weights
- novelty typography
- decorative type treatments that reduce clarity

### Layout
Use editorial spacing and rhythm.

The page should breathe.
Sections should feel intentional and separated.
There should be visible structure without excessive lines or containers.

Avoid:
- cramped grids
- random card clutter
- too many simultaneous focal points
- oversized UI chrome

### Color
Prefer:
- near-black / charcoal / warm off-white
- restrained neutrals
- one controlled accent if needed

Avoid:
- rainbow gradients
- loud neon overload
- multiple competing accents
- agency-style glossy color noise

### Motion
Motion must be subtle and functional.

Allowed:
- hover lifts
- fade/reveal transitions
- smooth scrolling
- capability map line animation
- small opacity/state transitions

Avoid:
- parallax overload
- spinning gimmicks
- endless floating elements
- animation that distracts from reading

---

## Capability Map Rules

This section is non-negotiable.

### Purpose
To show how Ryan’s capabilities connect to real work.

### Required behavior
When clicking a capability:
- capability becomes active
- related projects become active
- unrelated projects recede
- unrelated capabilities recede slightly
- viewport scrolls to the first relevant project
- visual relationship cues appear

When clicking a project:
- project becomes active
- related capabilities become active
- relationship is visible in reverse

### Technical expectations
- data-driven structure
- dynamic relationship mapping
- accessible interaction
- responsive behavior
- no brittle one-screen-only line hacks

Preferred model:
- skills/capabilities as structured data
- projects as structured data
- active state managed centrally
- SVG overlay or equivalent robust relationship rendering on larger screens
- simplified fallback on small screens if needed

### UX expectations
- immediate comprehension
- no confusion about what is clickable
- obvious active vs inactive state
- no reliance on connector lines alone for meaning

---

## Content Rules

Every sentence must earn its place.

Do not use filler phrases such as:
- passionate about technology
- love innovation
- always learning
- results-driven professional
- creative problem solver

These are empty.

Prefer statements with actual signal:
- what Ryan builds
- how Ryan thinks
- what kind of systems he prefers
- what his projects prove

The copy should sound:
- calm
- precise
- high-agency
- credible
- selective

Not:
- salesy
- overhyped
- self-congratulatory
- vague

---

## Project Presentation Rules

Projects are proof, not decoration.

Each project entry should show:
- what it is
- why it matters
- what Ryan did
- what capability it represents

Do not present projects as generic thumbnails with no narrative meaning.

Recommended homepage project descriptions should stay concise.
Detailed project pages can be deeper later if needed.

---

## Accessibility Rules

- keyboard accessible navigation
- focus-visible states
- semantic interactive elements
- sufficient contrast
- reduced-motion respect where practical
- interaction still understandable without animation

The site should remain usable even if advanced interaction or lines fail.

---

## Responsive Rules

### Desktop
- full editorial layout
- strongest typography
- capability map with full relationship presentation

### Tablet
- preserve hierarchy
- preserve interaction
- simplify spacing carefully
- keep capability map usable

### Mobile
- stack cleanly
- protect readability first
- capability map may simplify visually
- highlighting and relationship logic must remain functional
- no broken layouts or tiny unreadable cards

Mobile should feel intentionally adapted, not squeezed.

---

## Engineering Rules

- preserve repo conventions
- do not introduce heavy dependencies without need
- keep components modular
- reuse existing styles/tokens where appropriate
- prefer data-driven rendering
- if structure changes, update all call sites in the same round
- do not leave dead code behind

Likely component structure:
- Hero section
- SelectedWork section
- CapabilityMap section
- Thinking section
- About section
- Contact section

Possible helper/data modules:
- project data
- capability data
- relationship mapping
- shared section wrappers

---

## Definition of Done

The sprint is only done when:

1. The homepage clearly communicates Ryan’s positioning
2. Selected Work feels like real proof, not filler
3. Capability Map interaction works cleanly
4. Thinking / Thesis adds intellectual signal
5. The site feels editorial, minimal, and personal
6. The design does not feel like a pasted template
7. The site works on desktop, tablet, and mobile
8. Build/typecheck passes
9. No copied external copy or branding appears
10. The site feels like Ryan, not like a generic portfolio starter

---

## Output Rules

When finishing the sprint, always provide:

1. Brief summary
2. Updated file tree
3. Full contents of all modified/new files
4. Notes on homepage structure
5. Notes on capability/project data mapping
6. Exact verification steps
7. Any responsive caveats

Do not provide partial diffs only.
Do not omit modified files.
Do not leave important decisions unexplained.

---

## Final Principle

Do not build a stylish shell.

Build a personal website that makes Ryan feel like:
- a builder
- an operator
- a product thinker
- a systems person
- someone worth remembering
