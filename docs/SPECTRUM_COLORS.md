# Spectrum Colors

- INFO Adobe Spectrum provides 331 CSS custom properties for theming across light/dark/darkest modes
- CONTEXT Dark and Darkest themes are IDENTICAL (binary system, not gradient) - focus on Light vs Dark only
- GOAL Use semantic CSS variables to enable automatic theme switching without component modifications
- REQUIREMENT Never hardcode hex colors; always use `var(--spectrum-*)` custom properties

## Core Patterns

### Pattern 1: Color Family Inversion

- INFO All 13 color families (blue, red, orange, green, cyan, yellow, etc.) follow identical inversion rule
- OBSERVATION Low numbers (100-500) are backgrounds; high numbers (600-1400) are interactive elements
- FIX Light theme uses pastels (low numbers); dark theme uses deep saturated (low numbers flipped)
- FIX Light theme uses medium/dark (high numbers); dark theme uses bright (high numbers flipped)

Example - Blue family:
- Low: `spectrum-blue-100` Light `#e0f2ff` pastel ↔ Dark `#002651` navy
- Low: `spectrum-blue-500` Light `#78bbfa` light ↔ Dark `#005cc8` dark
- High: `spectrum-blue-600` Light `#59a7f6` medium ↔ Dark `#066ce7` pure blue
- High: `spectrum-blue-900` Light `#0265dc` deep ↔ Dark `#5eaaf7` bright

### Pattern 2: Semantic Component Variables

- INFO Don't reference color numbers directly; use semantic variables that handle theme switching
- OBSERVATION Semantic variables reference different palette numbers per theme automatically
- EXAMPLE `--spectrum-accent-background-color-default` uses `accent-900` in light, `accent-600` in dark
- REQUIREMENT Pick semantic variable → Provider handles color selection per theme

Semantic Categories:
- Accent: primary actions (buttons, CTAs)
- Neutral: secondary actions (cancel, secondary)
- Positive: success states (approved, success)
- Negative: error states (danger, failed)
- Informative: info/notification (blue badge)
- Color-specific: direct color families (blue, red, green, etc.)

### Pattern 3: Interactive State Progression

- INFO All interactive components follow same pattern: default → hover → active/down → focus
- OBSERVATION Light theme: Bright → Lighter → Even Lighter (higher palette numbers)
- OBSERVATION Dark theme: Muted → Brighter → Even Brighter (lower palette numbers)

Example - Accent button:
```
--spectrum-accent-background-color-default    (base state)
--spectrum-accent-background-color-hover      (mouse over)
--spectrum-accent-background-color-down       (pressed)
--spectrum-accent-background-color-key-focus  (keyboard focus)
```

### Pattern 4: Border & Stroke Colors

- INFO Borders invert luminosity while maintaining opacity (10%)
- FIX Light theme: `#2c2c2c1a` (dark with 10%) → Dark theme: `#efefef1a` (light with 10%)
- OBSERVATION Maintains contrast in both themes with consistent opacity

Variables:
- `--spectrum-alias-appframe-border-color` (light gray → black)
- `--spectrum-well-border-color` (subtle, both themes)
- All `*-border-color` variants

### Pattern 5: Overlay & Highlight Colors

- INFO Overlays use black in both themes; highlights use black (light) or white (dark)
- FIX Hover: Light `#0000000f` (black 6%) → Dark `#ffffff14` (white 8%)
- FIX Active: Light `#2c2c2c1a` (dark 10%) → Dark `#efefef26` (light 15%)
- FIX Selected: Light `#1473e61a` (blue 10%) → Dark `#4096f333` (bright blue 20%)
- OBSERVATION Higher opacity in dark theme for visibility

Variables:
- `--spectrum-alias-highlight-hover` (subtle overlay)
- `--spectrum-alias-highlight-active` (stronger overlay)
- `--spectrum-alias-highlight-selected` (selection state)
- `--spectrum-alias-highlight-selected-hover` (selected + hover)
- `--spectrum-alias-highlight-invalid` (error highlight)

### Pattern 6: Special Surfaces

- INFO Trays/panels use extremes of gray scale; wells use subtle effects
- FIX `--spectrum-tray-background-color` = pure white (light) ↔ almost black (dark)
- FIX `--spectrum-well-background-color` = `#ebebeb05` (2% opacity both themes, visual texture)
- FIX `--spectrum-alias-pasteboard-background-color` = main background (white ↔ black)
- FIX `--spectrum-alias-background-color-modal-overlay` = black 4-5% (consistent both themes)

### Pattern 7: UI Scaling System

- INFO Custom scale system using CSS custom properties for responsive typography and spacing
- OBSERVATION Two scale levels: normal (1.0) and large (1.25) with corresponding base font sizes
- GOAL Provide accessible UI scaling without breaking layouts or requiring component modifications
- REQUIREMENT Use `calc(var(--scale-factor) * value)` for scalable dimensions

Scale Definitions:
```css
.is-scale-normal {
  --scale-factor: 1;
  --font-size-base: 14px;
}

.is-scale-large {
  --scale-factor: 1.25;
  --font-size-base: 16px;
}
```

Usage Patterns:
- Font sizes: Use `--font-size-base` or multiply with scale-factor
- Spacing: `calc(var(--scale-factor) * 16px)` for proportional spacing
- Icon sizes: `calc(var(--scale-factor) * 24px)` for scaled icons
- Component padding: `calc(var(--scale-factor) * 12px)` for consistent padding
- Border radius: Keep fixed or use minimal scaling for visual consistency

Example - Scaled Component:
```scss
.Button {
  font-size: var(--font-size-base);
  padding: calc(var(--scale-factor) * 8px) calc(var(--scale-factor) * 16px);
  border-radius: 4px; // Fixed, doesn't scale
  
  .Button_icon {
    width: calc(var(--scale-factor) * 20px);
    height: calc(var(--scale-factor) * 20px);
  }
}
```

Example - Scaled Layout:
```scss
.Container {
  padding: calc(var(--scale-factor) * 24px);
  gap: calc(var(--scale-factor) * 16px);
  
  .Container_title {
    font-size: calc(var(--font-size-base) * 1.5); // 21px normal, 24px large
    margin-bottom: calc(var(--scale-factor) * 12px);
  }
}
```

Scaling Best Practices:
- PROVEN Scale text, spacing, and interactive elements proportionally
- PROVEN Keep borders (1-2px) and border-radius fixed for visual consistency
- PROVEN Scale icons and interactive target sizes for accessibility
- AVOIDED Scaling everything uniformly (breaks visual hierarchy)
- AVOIDED Hardcoded pixel values for spacing (defeats scaling purpose)

## Most-Used Variables

- `--spectrum-accent-background-color-*` → Primary buttons, actions
- `--spectrum-neutral-background-color-*` → Secondary buttons
- `--spectrum-positive-background-color-*` → Success states
- `--spectrum-negative-background-color-*` → Error states
- `--spectrum-informative-background-color-*` → Info/notifications
- `--spectrum-well-background-color` → Cards, containers
- `--spectrum-well-border-color` → Card borders
- `--spectrum-alias-appframe-border-color` → App structure borders
- `--spectrum-alias-highlight-selected` → Selection highlighting
- `--spectrum-alias-background-color-modal-overlay` → Modal dimming

## Implementation Rules

### Rule 1: Never Hardcode Hex

- TRIED `background: #1473e6` (light only, fails in dark mode)
- AVOIDED Manual `.is-dark { background: #... }` overrides (unmaintainable)
- PROVEN Use: `background: var(--spectrum-accent-background-color-default)` (automatic switching)

### Rule 2: Use Semantic, Not Color Numbers

- TRIED `var(--spectrum-blue-900)` (forces one color, defeats theming)
- PROVEN Use: `var(--spectrum-informative-background-color-default)` (uses correct palette per theme)

### Rule 3: Match Element Purpose to Variable

| Element Type | Variable |
|---|---|
| Primary button | `accent-background-color-*` |
| Secondary button | `neutral-background-color-*` |
| Success message | `positive-background-color-*` |
| Error message | `negative-background-color-*` |
| Info alert | `informative-background-color-*` |
| Card/well | `well-background-color` |
| Card border | `well-border-color` |
| App border/divider | `appframe-border-color` |
| Selected item | `highlight-selected` |
| Modal background | `background-color-modal-overlay` |

## Common Component Patterns

### Button with States

```scss
.Button.is-primary {
  background: var(--spectrum-accent-background-color-default);
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background: var(--spectrum-accent-background-color-hover);
  }

  &:active {
    background: var(--spectrum-accent-background-color-down);
  }

  &:focus-visible {
    outline: 2px solid var(--spectrum-accent-background-color-key-focus);
  }
}
```

### Card / Container

```scss
.Card {
  background: var(--spectrum-well-background-color);
  border: 1px solid var(--spectrum-well-border-color);
  border-radius: 4px;
  padding: 16px;
}
```

### Selected Row

```scss
.Row.is-selected {
  background: var(--spectrum-accent-background-color-hover);
  box-shadow: inset 0 0 0 2px var(--spectrum-alias-highlight-selected);
}
```

### Modal Overlay

```scss
.ModalBackdrop {
  position: fixed;
  inset: 0;
  background: var(--spectrum-alias-background-color-modal-overlay);
}
```

### Alert / Status Message

```scss
.Alert.is-success {
  background: var(--spectrum-positive-background-color-default);
  border-left: 4px solid var(--spectrum-positive-visual-color);
}

.Alert.is-error {
  background: var(--spectrum-negative-background-color-default);
  border-left: 4px solid var(--spectrum-negative-visual-color);
}
```

### List Item with Hover

```scss
.ListItem {
  padding: 8px 12px;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background: var(--spectrum-alias-highlight-hover);
  }

  &.is-active {
    background: var(--spectrum-alias-highlight-active);
  }
}
```

## Color Families Reference

- INFO All 13 families follow identical inversion pattern
- CONTEXT Primary (Gray) + Semantic (Blue, Red, Orange, Yellow, Green) + Accents (Cyan, Purple, Indigo, Magenta, Fuchsia, Seafoam, Celery, Chartreuse)
- OBSERVATION Each family has palette 100-1400: 100-500 backgrounds, 600-1400 interactive

Quick reference by family:
- Blue: Informative/primary actions
- Red: Error/negative states
- Green: Success/positive states
- Orange: Warnings/notices
- Yellow: Emphasis/attention
- Gray: Neutral/backgrounds
- Cyan/Purple/Indigo/Magenta/Fuchsia/Seafoam/Celery/Chartreuse: Alternative accents

## Overlay Opacity Reference

- OBSERVATION Different states use different opacity for visual hierarchy
- Border overlays: 10% opacity (consistent)
- Hover overlays: 6-8% opacity (subtle)
- Active overlays: 10-15% opacity (stronger)
- Selection overlays: 10-30% opacity (medium to strong)
- Invalid/error overlays: 10-15% opacity (error emphasis)
- Modal dim: 4-5% opacity (consistent, should be dark even in dark theme)

## Edge Cases & Special Rules

### Gray Numbers Are Symmetric

- OBSERVATION Gray colors invert but stay in relative position
- FIX `spectrum-gray-50` (white) ↔ `spectrum-gray-900` (black)
- FIX `spectrum-gray-100` ↔ `spectrum-gray-800`
- VALIDATION Middle grays shift but remain usable for their position

### Visual Colors Stay Constant

- INFO Icon/indicator colors don't change across themes (for semantic meaning)
- FIX `--spectrum-positive-visual-color` always green-800
- FIX `--spectrum-negative-visual-color` always red-700
- FIX `--spectrum-informative-visual-color` always blue-900
- FIX `--spectrum-notice-visual-color` always orange-900

### Variables That Don't Change (Safe Direct Use)

- OBSERVATION Only 12 variables constant across themes
- INFO Version/status metadata + deprecated mappings (don't use)
- VALIDATION All semantic and color-specific variables change per theme

### Nested Theme Providers

- OBSERVATION Can nest Providers to have different themes in different sections
- EXAMPLE Dark modal inside light app: wrap modal content in `<Provider colorScheme="dark">`
- VALIDATION Theme switching applies only to nested scope

## Testing Checklist

- VALIDATION Replace all hardcoded hex with `var(--spectrum-*)`
- VALIDATION Verify light theme contrast ratio (WCAG AA: 4.5:1 minimum)
- VALIDATION Verify dark theme contrast ratio (WCAG AA: 4.5:1 minimum)
- VALIDATION Test hover states visible in both themes
- VALIDATION Test active/pressed states visible
- VALIDATION Test focus indicators visible (keyboard navigation)
- VALIDATION Test disabled states visible
- VALIDATION Test borders visible in both themes
- VALIDATION Verify no information conveyed by color alone
- VALIDATION Test theme switching works without component changes

## Common Mistakes to Avoid

- TRIED Hardcoding hex values (fails in opposite theme)
- TRIED Manual dark mode overrides (unmaintainable, inconsistent)
- TRIED Using color numbers instead of semantic variables (defeats auto-switching)
- TRIED Assuming Darkest is different from Dark (they're identical)
- TRIED Ignoring contrast ratios (fails accessibility)
- TRIED Using opacity on semantic colors (already handled)
- AVOIDED All of the above patterns

## Quick Decision Tree

- IS it a primary action? → `accent-background-color-*`
- IS it secondary? → `neutral-background-color-*`
- IS it success-related? → `positive-background-color-*`
- IS it error-related? → `negative-background-color-*`
- IS it a container? → `well-background-color`
- IS it a border/separator? → `appframe-border-color` or `well-border-color`
- IS it a hover/selection? → `highlight-hover` or `highlight-selected`
- IS it a modal? → `background-color-modal-overlay`

## SCSS Mixin Templates

```scss
// Button states
@mixin button-states($base-var) {
  background: var(--spectrum-#{$base-var}-background-color-default);
  &:hover { background: var(--spectrum-#{$base-var}-background-color-hover); }
  &:active { background: var(--spectrum-#{$base-var}-background-color-down); }
}

// Container with border
@mixin card-style {
  background: var(--spectrum-well-background-color);
  border: 1px solid var(--spectrum-well-border-color);
  border-radius: 4px;
}

// Overlay effect
@mixin overlay-effect {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--spectrum-alias-highlight-hover);
  }
}
```

## Resources

- LINK Adobe Spectrum Color Fundamentals: https://spectrum.adobe.com/page/color-fundamentals/
- LINK React Spectrum Theming: https://react-spectrum.adobe.com/react-spectrum/theming.html
- LINK Provider Component: https://react-spectrum.adobe.com/react-spectrum/Provider.html
- LINK Full Spectrum Documentation: ./docs/spectrum/ (component-specific docs)

## Summary

- OBSERVATION Binary theme system (Light vs Dark only; Darkest identical to Dark)
- PROVEN Use semantic CSS variables for automatic switching
- REQUIREMENT Never hardcode hex colors
- VALIDATION Follow checklist before committing color-dependent components
- SUCCESS Result: Themeable components, no manual switching, consistent across app
