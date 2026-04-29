# coCare Design Principles

North star for every design decision. These principles apply to all UI/UX work across the app.

## Core Principles

### 1. **Speed First**
Parents and caregivers are busy. Every interaction must be fast.
- Max 2-3 taps to complete any action
- Avoid multi-step flows (collapse when possible)
- Pre-fill known data (avoid re-entering info)
- Load states visible (no frozen UI)

**Example:** Create event in 3 taps: FAB → select date → save (not: FAB → form → review → save)

### 2. **Obvious Navigation**
Users should not need to "learn" the app.
- Clear labels + icons (no guessing)
- Consistent placement (tabs always same location)
- Visual feedback on interactions (active states, ripples)
- Breadcrumbs or back buttons always visible

**Example:** Bottom nav shows 5 clear modules (Family, Calendar, Messages, Expenses, Settings). No hidden menus.

### 3. **Minimal Friction**
Remove obstacles to getting things done.
- Fewer form fields (only ask what matters now)
- Inline validation (show errors immediately, not on submit)
- Smart defaults (pre-select common options)
- Optional fields clearly marked

**Example:** Create child profile: Name, DOB, relation. Not: Name, DOB, gender, allergies, preferences, photo (save for edit later).

### 4. **Family-Centric View**
Always show context: who am I, who's in my family, what's happening.
- Family name visible on every screen
- At-a-glance: upcoming events, active messages, expense summary
- Roles clear (I'm a parent, caregiver, guardian — affects what I see)

**Example:** Dashboard header shows "Familia García • 3 miembros • 2 próximos eventos"

### 5. **Trust Through Design**
Privacy and security visible, not hidden in settings.
- Clear who can see what (don't hide permissions)
- Data is yours (easy export, delete options)
- No dark patterns (no surprise charges, no hidden subscriptions)

---

## Design System Alignment

All UI decisions follow `docs/DESIGN_SYSTEM.md`:
- **Colors:** Semantic tokens only (OKLch, dark mode support)
- **Typography:** Mobile-first scale (text-lg for titles, text-sm for body)
- **Spacing:** Tailwind scale (no arbitrary px)
- **Mobile:** 375px minimum, 44px touch targets
- **Components:** shadcn/ui + Tailwind v4

---

## Operational Rules

### Every Component Must Answer:
1. **What is the user trying to do?** (not: what's the feature?)
2. **What's the happy path?** (fewest taps, clearest flow)
3. **What can go wrong?** (validation, errors, loading states)
4. **Is it accessible?** (keyboard, screen reader, color contrast, touch targets)

### Before PR:
- [ ] Does it follow Speed First? (taps ≤ 3 for main action)
- [ ] Is navigation obvious? (labels, icons, placement clear)
- [ ] Are form fields minimal? (only essentials, pre-filled where possible)
- [ ] Is mobile-first implemented? (375px + responsive breakpoints)
- [ ] Are errors user-friendly? (not: "ValidationError", yes: "Email already registered")

---

## Examples in Codebase

- **Good:** `components/dashboard/` (overview in one glance, quick actions FAB-style)
- **Good:** `components/messages/thread-view.tsx` (back button always visible, reply on same screen)
- **Learning:** `components/expenses/expense-form.tsx` (uses Dialog, not Sheet on mobile — Phase 2 improvement)

---

## Phase Alignment

- **Phase 1 (now):** Auth, family setup, core modules
  - Design principles: Speed, Obvious Navigation, Minimal Friction

- **Phase 2 (next):** Settings, customization, notifications
  - Design principles: Trust Through Design, Family-Centric

- **Phase 3 (later):** Advanced features, calendar sync, acknowledgment chain
  - Design principles: All of the above + personalization

---

## References

- `docs/DESIGN_SYSTEM.md` — Visual rules (colors, spacing, components)
- `docs/SETTINGS_ROADMAP.md` — Settings features by phase
- `.claude/agents/design-reviewer.md` — Automated design review rules
- `.claude/agents/react-component-reviewer.md` — Component best practices
