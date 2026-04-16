# AGENTS.md

## Mission

Refactor this website into a premium, Apple-inspired web experience.

The website must feel:
- calm
- precise
- premium
- restrained
- spacious
- modern
- highly readable
- intentionally designed

The website must NOT feel:
- retro
- brutalist
- terminal-like
- fake operating system UI
- boxed for the sake of being boxed
- like a SaaS admin dashboard
- like a crypto landing page
- like a generic startup template

The target is Apple-inspired web design language, not fake iOS UI in a browser.

---

## Direction Lock

Use this as the permanent visual direction:

- Apple.com style restraint
- premium product-style presentation
- strong typography hierarchy
- generous whitespace
- subtle surface layering
- neutral-first palette
- disciplined structure
- elegant motion restraint
- web-native patterns
- high readability

Never drift back toward:
- retro system UI
- terminal aesthetics
- thick black borders
- hard offset shadows
- fake window chrome
- OS simulation
- visual gimmicks used as identity

---

## Core Principles

### 1. Web-native, not fake iOS
The website should feel Apple-inspired on the web.
It should not imitate iPhone screens, fake tab bars, fake mobile nav bars, fake settings pages, or device chrome.

The correct reference is:
- Apple.com
- Apple product pages
- Apple OS presentation language on the web

The wrong reference is:
- fake app UI inside a desktop browser
- fake phone mock UI as the whole website
- “look, this is like an operating system” gimmicks

---

### 2. Typography leads
Typography is a primary design tool.

Use:
- clear headline hierarchy
- balanced subheads
- readable body text
- disciplined line length
- strong alignment
- consistent spacing between text blocks

Avoid:
- oversized text everywhere
- weak hierarchy
- dense paragraphs without rhythm
- decorative typography choices without purpose

---

### 3. Spacing creates the premium feel
Premium UI comes from spacing discipline, not decoration.

Use:
- generous section spacing
- consistent content widths
- clear internal padding
- smooth vertical rhythm
- intentional negative space

Avoid:
- cramped layouts
- over-nested wrappers
- excessive small boxes
- visual clutter

---

### 4. Surfaces must be subtle
Use surfaces carefully.

Use:
- soft tonal contrast
- restrained separators
- subtle borders when necessary
- subtle shadows only where useful
- calm layered depth

Avoid:
- thick black borders as a main system
- hard comic-style shadows
- fake window bars
- terminal panel styling
- over-framed content blocks
- blur everywhere

---

### 5. Color is restrained
Use a neutral-first color system.

Use:
- calm background tones
- controlled accent usage
- color to support hierarchy and emphasis

Avoid:
- loud gradients
- glow effects
- oversaturated accents
- visual styling that competes with content

---

### 6. Motion is quiet
Motion should support structure, not perform for attention.

Use:
- subtle hover transitions
- smooth state changes
- restrained entrance motion only where useful
- premium, quiet feedback

Avoid:
- flashy motion
- excessive scroll tricks
- floating gimmicks
- attention-seeking animation

---

## Navigation Rules

The header must feel:
- stable
- minimal
- premium
- easy to scan
- structurally clear

Use:
- clean layout
- restrained hover states
- balanced spacing
- subtle background/surface logic when sticky

Avoid:
- boxed terminal controls
- thick outlined nav pills
- fake system buttons
- noisy header decoration

---

## Section Rules

Each section must have a clear role.

Examples:
- Hero should feel like a true introduction
- Projects should feel like selected work
- About should feel editorial and human
- Contact should feel clean and direct
- Footer should end quietly and confidently

Avoid making every section look like the same repeated boxed module.

Different sections may share the same design system, but they must not all feel like clones.

---

## Content Framing Rules

The website should present Ryan Teo as:
- technically credible
- product-minded
- systems-oriented
- design-aware
- serious
- high-agency

Avoid framing the whole site as:
- a fake OS
- a playful terminal experiment
- a retro interface artifact
- a visual concept piece with weak information clarity

This is a high-quality personal website, not a design gimmick.

---

## Repo-Specific Refactor Lock

The following patterns are considered legacy direction and should generally be removed or heavily redesigned:

- thick black bordered containers
- hard offset shadows
- “window-bar”
- “window-chip”
- “window-status”
- “page-panel”
- “system-app”
- “portrait-frame”
- “map-shell”
- dotted or grid overlays as dominant background identity
- retro brutalist navigation treatments
- “personal system” / fake operating system wording

These patterns conflict with the target direction.

Do not preserve them unless there is a very strong functional reason, and even then they must be visually transformed.

---

## Technical Rules

- Preserve React + Vite + TypeScript
- Keep code modular and maintainable
- Refactor existing files directly where possible
- Avoid unnecessary rewrites
- Avoid unnecessary dependency additions
- Preserve accessibility
- Preserve responsive quality
- Keep the final implementation buildable
- Prefer clarity over cleverness

---

## Styling Rules

When editing global styles:
- reduce border dominance
- reduce shadow harshness
- improve spacing rhythm
- simplify background treatment
- strengthen typography hierarchy
- create a more premium and coherent page shell
- ensure mobile behavior still feels intentional

When editing components:
- remove fake-system metaphors
- reduce decorative framing
- let layout, type, and spacing do more of the work
- keep interaction states complete
- preserve usability

---

## Output Rules

For any meaningful refactor, always provide:

1. Brief audit
2. Updated file tree
3. Full contents of all modified files
4. Verification steps

Do not provide pseudo-code.
Do not provide vague advice without implementation.
Do not omit modified file contents.

---

## Sprint Discipline

Each sprint must have one main objective.

Do not widen scope.
Do not mix unrelated redesign ideas into a focused sprint.
Do not quietly reintroduce old retro/brutalist/system-interface patterns.

Current priority:
1. Design system reset
2. Header and page shell cleanup
3. Hero / selected work refinement
4. Capability map simplification or redesign
5. About / contact / footer polish

Follow that order unless explicitly instructed otherwise.
