# coCare Design System

Reference guide for all UI development. Every agent (Claude Code, Cursor, human) must follow these patterns to maintain visual consistency.

## Brand Identity

**Personality:** Warm + Clean. Trustworthy but not corporate. A family app for real situations.

**Color story:** Teal (trust, calm) + Coral accents (warmth, action). Neutral backgrounds to stay out of the way.

## Color System

OKLch color space for perceptually uniform colors and smooth dark mode transitions. Defined in `app/globals.css`.

### Semantic Tokens

Always use semantic tokens. Never hardcode Tailwind palette colors in components (exception: `lib/categories.ts` for module-specific category badges).

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` | `oklch(0.995 0.003 85)` | `oklch(0.155 0.015 260)` | Page background |
| `--foreground` | `oklch(0.16 0.015 260)` | `oklch(0.97 0.005 85)` | Primary text |
| `--primary` | `oklch(0.45 0.12 178)` | `oklch(0.65 0.14 178)` | Brand teal, CTAs, active states |
| `--primary-foreground` | `oklch(0.985 0.003 85)` | `oklch(0.14 0.015 260)` | Text on primary |
| `--secondary` | `oklch(0.94 0.03 178)` | `oklch(0.27 0.04 178)` | Secondary buttons, subtle backgrounds |
| `--secondary-foreground` | `oklch(0.28 0.07 178)` | `oklch(0.97 0.005 85)` | Text on secondary |
| `--muted` | `oklch(0.965 0.005 85)` | `oklch(0.27 0.01 260)` | Disabled, placeholder backgrounds |
| `--muted-foreground` | `oklch(0.46 0.015 260)` | `oklch(0.65 0.01 260)` | Secondary text, captions |
| `--accent` | `oklch(0.95 0.035 55)` | `oklch(0.28 0.03 55)` | Coral highlights, warm accents |
| `--accent-foreground` | `oklch(0.28 0.06 55)` | `oklch(0.97 0.005 85)` | Text on accent |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Errors, delete actions |
| `--card` | `oklch(1 0.002 85)` | `oklch(0.21 0.015 260)` | Card surfaces |
| `--border` | `oklch(0.91 0.008 85)` | `oklch(1 0 0 / 12%)` | Borders, dividers |
| `--input` | `oklch(0.91 0.008 85)` | `oklch(1 0 0 / 15%)` | Input borders |
| `--ring` | `oklch(0.45 0.12 178)` | `oklch(0.65 0.14 178)` | Focus rings |

### Usage in Code

```tsx
// CORRECT — semantic tokens
<div className="bg-background text-foreground" />
<Button className="bg-primary text-primary-foreground" />
<p className="text-muted-foreground text-sm" />

// WRONG — hardcoded colors
<div className="bg-white text-gray-900" />
<Button className="bg-teal-600 text-white" />
```

### Category Colors

Module-specific badges use hardcoded Tailwind palette colors. These are the ONLY exception to the semantic token rule, and they live exclusively in `lib/categories.ts`.

| Color | Category Meaning | Modules |
|---|---|---|
| Red (`bg-red-100`) | Medical/Health | Calendar, Messages, Documents, Expenses |
| Blue (`bg-blue-100`) | School/Education | Calendar, Messages, Documents, Expenses |
| Purple (`bg-purple-100`) | Custody/Legal | Calendar, Messages, Documents |
| Green (`bg-green-100`) | Activities | Calendar, Messages, Expenses |
| Orange (`bg-orange-100`) | Urgent/Food | Messages, Expenses |
| Gray (`bg-gray-100`) | General/Other | All modules |
| Cyan (`bg-cyan-100`) | Insurance/Transport | Documents, Expenses |
| Amber (`bg-amber-100`) | Identification | Documents |
| Pink (`bg-pink-100`) | Clothing | Expenses |
| Emerald (`bg-emerald-100`) | Financial | Documents |

Use `<CategoryBadge module="calendar" category="médica" />` from `components/ui/category-badge.tsx`. Never create ad-hoc colored badges.

## Typography

**Font:** Geist Sans (variable, `--font-geist-sans`). Applied globally via `font-sans`. Antialiased.

### Scale (Mobile-First)

| Level | Class | Size | Weight | Usage |
|---|---|---|---|---|
| Page title | `text-lg font-semibold` | 18px | 600 | Page headers (h1) |
| Section header | `text-base font-medium` | 16px | 500 | Card titles, section labels |
| Body | `text-sm` | 14px | 400 | Default content, descriptions |
| Caption | `text-xs text-muted-foreground` | 12px | 400 | Timestamps, metadata, badges |

**Rules:**
- Avoid `text-xl`+ on mobile. Screen real estate is limited at 375px.
- Use `font-semibold` (600) for titles, `font-medium` (500) for subtitles, normal weight for body.
- Captions always pair with `text-muted-foreground`.
- Dialog titles use `text-lg font-semibold`.

## Spacing

Tailwind scale only. No arbitrary values (`gap-[13px]`).

### Common Patterns

| Context | Value | Pixels |
|---|---|---|
| Card padding (mobile) | `p-4` | 16px |
| Card padding (desktop) | `p-6` | 24px |
| Page padding (mobile) | `p-4` | 16px |
| Page padding (desktop) | `md:p-8` | 32px |
| Between cards/sections | `gap-6` or `space-y-6` | 24px |
| Between items in a list | `gap-3` or `space-y-3` | 12px |
| Between elements in a group | `gap-2` or `space-y-2` | 8px |
| Between icon and text | `gap-2` | 8px |
| Section bottom margin | `mb-8` | 32px |

**Rules:**
- Prefer `gap-*` (on flex/grid) over `space-y-*` (on parent).
- Use responsive padding: `p-4 md:p-6` or `p-4 md:p-8`.
- Never use margin for spacing between siblings in a flex/grid container — use gap.

## Border Radius

Base: `--radius: 0.625rem` (10px). Defined in `app/globals.css`.

| Token | Value | Usage |
|---|---|---|
| `rounded-sm` | 6px | Small elements (badges inner) |
| `rounded-md` | 8px | Inputs, small buttons |
| `rounded-lg` | 10px | Buttons, cards (default) |
| `rounded-xl` | 14px | Cards, dialogs |
| `rounded-full` | 9999px | Badges, avatars, pills |

**Default card radius:** `rounded-xl`. **Default button radius:** `rounded-lg`.

## Shadows

| Class | Usage |
|---|---|
| `shadow-xs` | Inputs, subtle depth |
| `shadow-sm` | Cards, elevated surfaces |
| `shadow-lg` | Dialogs, popovers, sheets (high-z elements) |

**Rule:** Higher z-index = larger shadow. No shadow on flat elements (badges, labels).

## Components (shadcn/ui)

**Style:** `new-york` (components.json). **Icon library:** Lucide React.

### Button Sizes

| Size | Class | Height | Usage |
|---|---|---|---|
| `xs` | `h-6` | 24px | Inline actions only |
| `sm` | `h-8` | 32px | Secondary actions |
| `default` | `h-9` | 36px | General buttons |
| `lg` | `h-10` | 40px | Primary CTAs |
| `icon` | `size-9` | 36px | Icon-only buttons |

**Mobile touch target rule:** Primary interactive elements should be at minimum `h-10` (40px), ideally `h-11` (44px) for thumb-friendly tapping. Use `lg` size for primary actions on mobile.

### Card Pattern

```tsx
<Card className="overflow-hidden">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Icon className="size-4 shrink-0" />
      <span className="truncate">Title Text</span>
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-3">
    {/* content */}
  </CardContent>
</Card>
```

- Always `overflow-hidden` on Card.
- Icons in titles: `shrink-0`. Text: `truncate`.
- Content spacing: `space-y-3` (12px).

### Modals: Sheet vs Dialog

| Platform | Component | Behavior |
|---|---|---|
| Mobile (<640px) | `Sheet` (bottom drawer) | Slides up from bottom, feels native |
| Desktop (>=640px) | `Dialog` (centered modal) | Standard centered overlay |

**Rule:** For any action that creates/edits data, prefer Sheet on mobile. Dialogs feel like web popups on mobile — sheets feel like native app drawers.

### Form Pattern

```tsx
// Always: react-hook-form + zod + resolver
const form = useForm<FormValues>({
  resolver: zodResolver(schema),
  defaultValues: { ... },
});

// Mobile: sticky submit button at bottom
<form className="space-y-4">
  {/* fields */}
  <div className="sticky bottom-0 bg-background pt-2 pb-4">
    <Button type="submit" className="w-full h-11">
      Guardar
    </Button>
  </div>
</form>
```

- Input heights: `h-10` (40px) minimum for touch.
- Labels: `text-sm font-medium`.
- Error messages: `text-xs text-destructive`.
- Amount inputs: `inputMode="decimal"`, format with `en-US` locale.

## Mobile-First Patterns

**Minimum viewport:** 375px. **Approach:** Build for mobile first, enhance for desktop.

### Layout Rules

1. **Flex rows with text:** Left side gets `min-w-0 flex-1`, right side gets `shrink-0` only on fixed-width content (icons, short badges).
2. **Cards:** Always `overflow-hidden` to prevent children from pushing wider than viewport.
3. **Tabs:** Add `w-full max-w-full overflow-x-auto flex-nowrap` for horizontal scroll.
4. **Long text:** Use `truncate` for single-line overflow, `break-words` for multi-line user content (URLs, medical info).
5. **Never** `shrink-0` on variable-width user content (names, emails, categories).

### Critical Flexbox Pattern: `min-w-0` for Overflow Prevention

**Problem:** Flex children use intrinsic content width as minimum by default. On narrow viewports (375-390px), this causes text overflow.

**Solution:** Always add `min-w-0` to flex children with variable-width content.

```tsx
// ✅ CORRECT — variable content can compress
<div className="flex gap-2">
  <div className="min-w-0 flex-1">
    <p className="truncate">Long user name that might overflow</p>
  </div>
  <div className="shrink-0">
    <Icon className="size-4" />
  </div>
</div>

// ❌ WRONG — flex-1 without min-w-0 causes overflow
<div className="flex gap-2">
  <div className="flex-1">
    <p className="truncate">Long user name</p>  {/* truncate won't work! */}
  </div>
</div>
```

**Real-world examples:**
- Message bubble headers (name + timestamp)
- Bottom navigation labels
- List items with icons + text
- Card titles with badges

### Scroll Container Hierarchy

For layouts with fixed header/footer and scrollable middle:

```tsx
// ✅ CORRECT — min-h-0 allows flex-1 to shrink below content height
<div className="flex flex-1 flex-col min-h-0">
  <div className="shrink-0">{/* Fixed header */}</div>
  <div className="flex-1 overflow-y-auto min-w-0">{/* Scrollable content */}</div>
  <div className="shrink-0">{/* Fixed footer */}</div>
</div>

// ❌ WRONG — without min-h-0, flex-1 respects intrinsic content height
<div className="flex flex-1 flex-col">
  <div>{/* Header */}</div>
  <div className="flex-1 overflow-y-auto">{/* Scroll breaks on long content */}</div>
  <div>{/* Footer gets pushed off screen */}</div>
</div>
```

**When to use:** Thread views, chat interfaces, modals with scrollable content.

### Flexbox Overflow Prevention Checklist

Before committing any flex layout:

- [ ] Variable-width children have `min-w-0 flex-1`
- [ ] Fixed-width children (icons, badges, buttons) have `shrink-0`
- [ ] Text content uses `truncate` (single-line) or `break-words` (multi-line)
- [ ] Scroll containers use `min-h-0` on parent with `flex-1`
- [ ] Tested at **375px viewport** in Chrome DevTools (iPhone SE)
- [ ] Verified **desktop/tablet breakpoints** unaffected (md:768px, lg:1024px)

**Common mistake:** Adding `flex-1` without `min-w-0` — this prevents shrinkage below intrinsic content width.

**Cross-breakpoint safety:** The patterns above (`min-w-0`, `flex-wrap`, `truncate`) are breakpoint-agnostic. They only affect flex shrinkage behavior and do not cause visual regressions on desktop. However, always test responsive layouts at multiple breakpoints (375px, 768px, 1024px) to ensure split-view layouts (desktop) remain functional.

### Safe Areas (Capacitor Native)

```css
/* Bottom nav / fixed bottom elements */
padding-bottom: env(safe-area-inset-bottom);

/* Status bar area */
padding-top: env(safe-area-inset-top);
```

### Touch Targets

- Minimum: **44px** (Apple HIG recommendation)
- Primary buttons: `h-11` (44px)
- List items: minimum `py-3` (gives ~48px total with text)
- Icon buttons: `size-10` (40px) minimum
- Bottom nav items: 56-64px height

### Responsive Breakpoints

| Prefix | Min-width | Device | Layout Strategy |
|---|---|---|---|
| (none) | 0px (375px min) | Mobile (iPhone SE) | Single-column, full-width, stacked |
| `sm:` | 640px | Large phones, phablets | Single-column fluid or 2-col grid |
| `md:` | 768px | Tablets (portrait) | Split views, multi-column grids |
| `lg:` | 1024px | Desktop, tablets (landscape) | Fixed sidebars, wide layouts |
| `xl:` | 1280px | Wide desktop | Constrained max-width (prevent over-stretch) |

**Design philosophy:**
- **Mobile (0-639px):** Base styles. Full-width components, vertical stacking, touch-first.
- **Tablet (640-1023px):** Transition zone. Use fluid widths (`w-2/5`, `flex-1`) instead of fixed pixels. Multi-column grids where appropriate.
- **Desktop (1024px+):** Fixed sidebars, horizontal split views, constrained content (`max-w-4xl`).

### Responsive Layout Patterns

**Single source of truth for cross-breakpoint layouts.** Every layout type below is tested at 375px, 768px, and 1024px.

#### 1. Split View (List + Detail)

**Use case:** Messages, calendar, documents (list on left, detail on right).

**Pattern:**
```tsx
// Mobile (0-767px): Single view with conditional rendering
// Tablet+ (768px+): Side-by-side split

<div className="flex h-[calc(100dvh-8rem)] overflow-hidden">
  {/* Sidebar: fluid width on tablet, fixed on desktop */}
  <div className="hidden md:flex md:w-2/5 lg:w-[420px] shrink-0 flex-col border-r">
    {/* List content */}
  </div>

  {/* Detail panel */}
  <div className="flex flex-1 flex-col md:bg-muted/10">
    {showDetail ? (
      <DetailView onBack={handleClose} /> {/* Mobile back button */}
    ) : (
      <EmptyState /> {/* Desktop placeholder */}
    )}
  </div>
</div>
```

**Key rules:**
- Sidebar width: `md:w-2/5` (fluid, ~40%) → `lg:w-[420px]` (fixed at desktop)
- Never use `md:w-[380px]` — fixed pixels on tablet break responsive flow
- Mobile shows single view at a time (conditional `{showDetail ? ... : ...}`)
- Detail panel always `flex-1` to fill remaining space

**Examples:** `components/messages/messages-view.tsx`

#### 2. Grid Layouts

**Pattern:**
```tsx
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns (optional, depends on content density)

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map(...)}
</div>
```

**When to stop at 2 columns:**
- Cards with rich content (calendar events, documents, expenses) — 3 columns too cramped
- Dashboard widgets — 2 columns max for readability

**When to use 3 columns:**
- Simple list items (contacts, categories, small tiles)
- Icon grids or feature lists

**Examples:** Dashboard cards use 2-column max.

#### 3. Form Layouts

**Pattern:**
```tsx
// Mobile: Full-width stacked fields
// Tablet+: 2-column grid for related fields

<form className="space-y-4">
  {/* Single-column fields (email, password) */}
  <div className="grid gap-4">
    <Input label="Email" />
    <Input label="Password" />
  </div>

  {/* Two-column fields (first/last name, start/end time) */}
  <div className="grid gap-4 sm:grid-cols-2">
    <Input label="Nombre" />
    <Input label="Apellido" />
  </div>
</form>
```

**Key rules:**
- Use `sm:grid-cols-2` (640px) for side-by-side fields — not `md:`
- Related fields go together (name fields, time fields, address fields)
- Wide fields (textarea, rich text) always full-width

#### 4. Content Containers

**Pattern:**
```tsx
// Mobile: Full-width with padding
// Desktop: Centered with max-width

<div className="p-4 md:p-8 max-w-4xl mx-auto">
  <h1>Page Title</h1>
  {/* Content */}
</div>
```

**Max-width guidelines:**
| Content Type | Max-width | Why |
|---|---|---|
| Text-heavy (blog, docs) | `max-w-3xl` (768px) | Optimal reading line length |
| Forms | `max-w-2xl` (672px) | Prevent over-wide inputs |
| Dashboard, app content | `max-w-4xl` (896px) or `max-w-6xl` (1152px) | Depends on density |
| Full-bleed (images, maps) | None | Use full viewport |

#### 5. Overflow-Safe Text (Critical for Narrow Viewports)

**Problem:** Flex children don't shrink below intrinsic content width by default. At 375px, this causes text overflow.

**Solution:** Always combine `min-w-0` + `flex-1` on variable-width text containers.

```tsx
// ✅ CORRECT
<div className="flex gap-2">
  <div className="min-w-0 flex-1">
    <p className="truncate">Long user name that compresses</p>
  </div>
  <Icon className="size-4 shrink-0" />
</div>

// ❌ WRONG — text overflows
<div className="flex gap-2">
  <div className="flex-1">
    <p className="truncate">Won't work without min-w-0</p>
  </div>
</div>
```

**This pattern is breakpoint-agnostic** — works at all sizes, no responsive variants needed.

**Examples:** Message bubble headers, bottom nav labels, list items with icons.

#### 6. Scroll Containers (Fixed Header/Footer)

**Use case:** Chat threads, modals with scrollable content, full-height app shells.

**Pattern:**
```tsx
<div className="flex flex-1 flex-col min-h-0">
  <header className="shrink-0 border-b p-4">Fixed Header</header>
  <div className="flex-1 overflow-y-auto min-w-0 p-4">
    {/* Scrollable content */}
  </div>
  <footer className="shrink-0 border-t p-4">Fixed Footer</footer>
</div>
```

**Key rules:**
- Parent: `flex flex-col min-h-0` (allows shrinkage below intrinsic height)
- Header/Footer: `shrink-0` (never compress)
- Scroll area: `flex-1 overflow-y-auto min-w-0`
- **Do NOT omit `min-h-0`** — causes footer to get pushed off-screen on long content

**Viewport height:** Use `h-[calc(100dvh-8rem)]` (accounts for app header + bottom nav).

**Examples:** `components/messages/thread-view.tsx`

### Responsive Testing Checklist

Before committing any layout:

- [ ] **Mobile (375px):** Test in Chrome DevTools (iPhone SE). Verify no horizontal scroll, text wraps, buttons reachable.
- [ ] **Tablet (768px):** Check split views appear, sidebar uses fluid width (`w-2/5`), grids show 2 columns.
- [ ] **Desktop (1024px+):** Verify fixed sidebars (`lg:w-[420px]`), max-width containers centered, 3-column grids (if applicable).
- [ ] **Text overflow:** Long names, emails, URLs don't break layout. Use `min-w-0 flex-1` + `truncate`.
- [ ] **Touch targets:** Buttons/icons meet 44px minimum on mobile (`h-11`, `size-10`).
- [ ] **Scroll behavior:** Fixed header/footer stay in place, content area scrolls correctly.

### Common Responsive Mistakes

| Mistake | Fix | Why |
|---|---|---|
| Fixed pixel widths on tablet (`md:w-[380px]`) | Use fluid (`md:w-2/5 lg:w-[420px]`) | Breaks responsive flow between breakpoints |
| `flex-1` without `min-w-0` | Add `min-w-0 flex-1` | Prevents shrinkage below content width |
| `shrink-0` on user content (names, emails) | Use `truncate` instead | Variable content must compress on narrow screens |
| Split view without mobile fallback | Conditional rendering (`{showDetail ? ... : ...}`) | Desktop split breaks on mobile |
| `md:` for form grids | Use `sm:` (640px) | Tablets have room for 2-column forms |
| Fixed viewport height without safe area | Use `dvh` and `calc()` | Accounts for browser UI on mobile |

## Animation

**Philosophy:** Subtle + Functional. No decorative animation.

### Allowed

| Animation | Usage | Class/Style |
|---|---|---|
| Tap feedback | Buttons, cards | `active:scale-[0.98]` |
| Fade in | Page content | `animate-fade-in-up` |
| Slide up | Sheets, toasts | Built into shadcn Sheet |
| Loading spinner | Async operations | `animate-spin` |
| Skeleton pulse | Loading states | `animate-pulse` |

### Not Allowed

- Parallax scrolling
- Fade-in-on-scroll (IntersectionObserver decorative)
- Bouncing elements
- Complex page transitions
- Any animation > 0.3s for interactive feedback

**Reduced motion:** Respect `prefers-reduced-motion`. shadcn components handle this via `tw-animate-css`.

## CSS Units & Responsive Design

**Modern CSS units** for optimal responsiveness across all devices. The codebase already uses these patterns — follow them.

### Viewport Units

**Use `svh` (small viewport height) for stable layouts:**
- Prevents layout shift when mobile browser UI shows/hides
- Example: `min-h-[calc(100svh-4rem)]` for hero sections
- See: `components/sections/hero.tsx`

**Use `dvh` (dynamic viewport height) for dialogs/modals:**
- Accounts for mobile browser address bar
- Example: `max-h-[90dvh]` for DialogContent
- See: `components/documents/document-form.tsx`

**Avoid `vh` on mobile** — causes layout shift when browser UI appears/disappears.

### Fluid Spacing with `clamp()`

**Use `clamp()` with viewport units for responsive spacing:**
- Pattern: `py-[clamp(1rem,5svh,6rem)]` for section padding
- Min: `1rem` (16px), Preferred: `5svh` (scales with viewport), Max: `6rem` (96px)
- Examples in codebase: `components/sections/hero.tsx`, `components/sections/cta.tsx`

### Container Queries

**Use Tailwind v4 `@container` directive for component-level responsiveness:**
- Example: `@container/card-header` in `components/ui/card.tsx`
- Prefer container queries over media queries when component size matters more than viewport size

### Unit Selection Guide

| Use Case | Unit | Example | Why |
|---|---|---|---|
| Typography | `rem` (via Tailwind classes) | `text-sm`, `text-lg` | Respects user font size preferences |
| Spacing | Tailwind scale (`p-4`, `gap-6`) | `p-4 md:p-6` | Consistent, semantic |
| Viewport height (stable) | `svh` | `min-h-[calc(100svh-4rem)]` | No layout shift on mobile |
| Viewport height (dynamic) | `dvh` | `max-h-[90dvh]` | Accounts for browser UI |
| Fluid spacing | `clamp()` + `svh` | `py-[clamp(1rem,5svh,6rem)]` | Scales smoothly |
| Component responsiveness | Container queries | `@container/card` | Component-level breakpoints |

**Rules:**
- ✅ Use Tailwind classes (`text-sm`, `p-4`) — they use `rem` internally
- ✅ Use `svh`/`dvh` in Tailwind arbitrary values when needed
- ✅ Use `clamp()` for fluid typography/spacing that scales with viewport
- ❌ Avoid `px` values (except in rare cases where fixed size is required)
- ❌ Avoid `vh` on mobile (use `svh` or `dvh` instead)
- ❌ Avoid arbitrary `px` values in Tailwind (`gap-[13px]`) — use scale

### Examples from Codebase

```tsx
// Hero section with stable viewport (components/sections/hero.tsx)
<section className="min-h-[calc(100svh-4rem)] py-[clamp(1.25rem,6svh,7rem)]">

// Dialog with dynamic viewport (components/documents/document-form.tsx)
<DialogContent className="max-h-[90dvh] overflow-y-auto">

// Container query pattern (components/ui/card.tsx)
<CardHeader className="@container/card-header grid ...">
```

## Accessibility

- **Color contrast:** WCAG AA minimum (4.5:1 for text, 3:1 for large text). The OKLch palette is designed for this.
- **Focus rings:** `focus-visible:ring-[3px]` with `--ring` color. All interactive elements must show focus.
- **Touch targets:** 44px minimum (see Mobile section).
- **Labels:** Every form input has an associated `<Label>`. Use shadcn Form component for automatic `htmlFor` binding.
- **Alt text:** All images require `alt`. Decorative icons use `aria-hidden="true"` (Lucide does this by default).
- **Language:** `lang="es"` on `<html>` (set in root layout).

## File Reference

| File | Purpose |
|---|---|
| `app/globals.css` | Theme tokens (OKLch), base styles, custom animations |
| `components.json` | shadcn config (new-york style, neutral base, lucide icons) |
| `lib/categories.ts` | Module category colors + icons |
| `components/ui/category-badge.tsx` | Reusable category badge component |
| `components/ui/button.tsx` | Button variants + sizes |
| `components/ui/card.tsx` | Card composable parts (uses `@container`) |
| `components/ui/dialog.tsx` | Dialog (desktop modals) |
| `components/ui/sheet.tsx` | Sheet (mobile bottom drawers) |
| `components/sections/hero.tsx` | Example: `svh` and `clamp()` usage |
| `components/documents/document-form.tsx` | Example: `dvh` usage in dialogs |
| `.claude/skills/mobile-patterns/SKILL.md` | Mobile CSS rules (auto-loaded) |
| `.claude/agents/design-reviewer.md` | Design review agent |
| `.claude/agents/styleguide-advisor.md` | Styleguide advisor agent |
| `.cursor/rules/design-system.mdc` | Cursor design rules |
