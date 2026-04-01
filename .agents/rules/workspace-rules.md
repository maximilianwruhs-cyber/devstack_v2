---
trigger: always_on
---

# Project UI Standards

- Color Palette: Primary is `#1E3A8A` (Blue), Secondary is `#10B981` (Green), Accent is `#F59E0B` (Amber).
- Always use Tailwind CSS utility classes for styling (never standard CSS files).
- UI Elements (like buttons) must always include hover and active states.
- Dark mode compatibility must be built into all new components.

# Project Architecture Restrictions

- Do not mutate state directly; always use the established state management library (e.g., Redux, Zustand).
- All new components must be strictly separated into the `/components` folder, while pages go into `/app`.
- Before committing, ensure no console.logs or debuggers are left in the code.

# Git Standards

- Follow Conventional Commits format for all commit messages.
- Permitted prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`.
- Ensure the commit message clearly explains *what* changed and *why* (Model Decision).
