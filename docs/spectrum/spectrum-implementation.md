# Spectrum Implementation Guide

Implementation plan for integrating Adobe Spectrum design system into the phiui project.

## Overview

GOAL Implement Adobe Spectrum design system using React Spectrum as primary and swc-react for gap-filling
STRATEGY Two-library approach for maximum component coverage with consistent React patterns
REQUIREMENT All Spectrum packages must use identical versions to avoid conflicts

## Phase 1: Project Setup & Dependencies

### Task 1.1: Install React Spectrum (Primary Library)
```bash
pnpm add @adobe/react-spectrum
```

VALIDATION Check package.json contains @adobe/react-spectrum
VALIDATION Run `pnpm list @adobe/react-spectrum` to confirm version

### Task 1.2: Install swc-react (Gap-Filling Library)
```bash
# Install core theme wrapper
pnpm add @swc-react/theme

# Install individual components as needed (example)
pnpm add @swc-react/button
```

NOTES swc-react uses per-component packages, not a monolithic bundle
NOTES Only install swc-react components not available in React Spectrum
VALIDATION Confirm all @swc-react packages use same version as @adobe/react-spectrum

### Task 1.3: Verify Version Compatibility
```bash
pnpm list | grep -E "@adobe/react-spectrum|@swc-react"
```

CRITICAL All Spectrum packages must use identical version numbers
ACTION If versions mismatch, update package.json to use exact versions
VALIDATION All packages show same version number (e.g., 3.x.x)

## Phase 2: Theme Configuration

### Task 2.1: Create Theme Configuration File
PATH src/theme/SpectrumThemeConfig.ts

```typescript
import { Theme } from '@adobe/react-spectrum'

export const spectrumThemeConfig = {
  colorScheme: 'light' as const,
  scale: 'medium' as const,
}

// Available color schemes: 'light' | 'dark'
// Available scales: 'medium' | 'large'
```

NOTES Spectrum supports light/dark color schemes
NOTES Scale affects component sizing (medium recommended for most UIs)

### Task 2.2: Create Root Theme Provider Component
PATH src/theme/SpectrumProvider.tsx

```typescript
import { Provider, defaultTheme } from '@adobe/react-spectrum'
import { ReactNode } from 'react'
import { spectrumThemeConfig } from './SpectrumThemeConfig'

interface SpectrumProviderProps {
  children: ReactNode
}

export function SpectrumProvider({ children }: SpectrumProviderProps) {
  return (
    <Provider 
      theme={defaultTheme} 
      colorScheme={spectrumThemeConfig.colorScheme}
      scale={spectrumThemeConfig.scale}
    >
      {children}
    </Provider>
  )
}
```

NOTES Provider must wrap entire app for theme to apply
NOTES Can nest Providers for different theme sections if needed

### Task 2.3: Wrap App with Theme Provider
PATH src/main.tsx or src/App.tsx

```typescript
import { SpectrumProvider } from './theme/SpectrumProvider'

// Wrap root component
<SpectrumProvider>
  <App />
</SpectrumProvider>
```

VALIDATION App renders without theme errors
VALIDATION Spectrum components display with correct styling

## Phase 3: Component Inventory & Planning

### Task 3.1: Audit React Spectrum Component Availability
LINK https://react-spectrum.adobe.com/react-spectrum/

Create checklist of needed components:
- [ ] Button - ✅ Available in React Spectrum
- [ ] TextField - ✅ Available in React Spectrum
- [ ] Select - ✅ Available in React Spectrum
- [ ] Checkbox - ✅ Available in React Spectrum
- [ ] Radio - ✅ Available in React Spectrum
- [ ] Dialog - ✅ Available in React Spectrum
- [ ] Menu - ✅ Available in React Spectrum
- [ ] Table - ✅ Available in React Spectrum
- [ ] Tabs - ✅ Available in React Spectrum
- [Add more as needed]

ACTION Mark each component as available or missing in React Spectrum

### Task 3.2: Identify Gap Components Needing swc-react
LINK https://opensource.adobe.com/spectrum-web-components/

List components only in Spectrum Web Components:
- [ ] Component X - Use @swc-react/component-x
- [ ] Component Y - Use @swc-react/component-y

STRATEGY For each gap component, install corresponding @swc-react package
NOTES Check swc-react availability: https://opensource.adobe.com/spectrum-web-components/using-swc-react/

### Task 3.3: Create Component Usage Strategy Document
PATH docs/spectrum-components-strategy.md

```markdown
# Component Usage Strategy

## React Spectrum (Primary)
- Button: @adobe/react-spectrum
- TextField: @adobe/react-spectrum
- [List all primary components]

## swc-react (Gap-Filling)
- [Component Name]: @swc-react/[package-name]
- [List gap-filling components]

## Not Using
- Raw @spectrum-web-components/* (avoid in React)
```

VALIDATION Every needed component has clear source documented

## Phase 4: Create Component Wrappers

### Task 4.1: Create Base Component Wrapper Structure
PATH src/components/spectrum/

```
src/components/spectrum/
├── index.ts              # Export all wrappers
├── Button/
│   ├── Button.tsx        # React Spectrum wrapper
│   └── Button.types.ts   # TypeScript types
├── TextField/
│   ├── TextField.tsx
│   └── TextField.types.ts
└── [other components]
```

NOTES Wrappers add project-specific customizations and naming conventions
NOTES Keeps direct Spectrum imports isolated for easier future changes

### Task 4.2: Create Example Button Wrapper
PATH src/components/spectrum/Button/Button.tsx

```typescript
import { Button as SpectrumButton, ButtonProps as SpectrumButtonProps } from '@adobe/react-spectrum'

export interface ButtonProps extends SpectrumButtonProps {
  // Add project-specific props if needed
}

export function Button(props: ButtonProps) {
  return <SpectrumButton {...props} />
}
```

NOTES Start simple, add customizations as needed
NOTES Use wrapper pattern for consistent API across project

### Task 4.3: Create Barrel Export
PATH src/components/spectrum/index.ts

```typescript
export { Button } from './Button/Button'
export type { ButtonProps } from './Button/Button'
// Export other components
```

VALIDATION Import works: `import { Button } from '@/components/spectrum'`

## Phase 5: Styling Integration

### Task 5.1: Review Spectrum Styling Approach
LINK https://react-spectrum.adobe.com/react-spectrum/styling.html

KEY POINTS Spectrum uses style props (not CSS classes)
KEY POINTS Style props: margin, padding, width, height, etc.
KEY POINTS Spectrum values use design tokens (size-100, size-200, etc.)

### Task 5.2: Create Style Token Reference
PATH src/styles/spectrum-tokens.ts

```typescript
// Design token reference for team
export const spectrumTokens = {
  spacing: {
    xs: 'size-50',
    sm: 'size-100',
    md: 'size-200',
    lg: 'size-300',
    xl: 'size-400',
  },
  colors: {
    // Document color usage
  },
}
```

NOTES Helps team use consistent spacing/sizing
NOTES Reference: https://spectrum.adobe.com/page/design-tokens/

### Task 5.3: Document Custom SCSS Integration
PATH docs/styling-with-spectrum.md

```markdown
# Styling with Spectrum

## Spectrum Components
- Use style props: margin, padding, width, etc.
- Use design tokens: size-100, size-200, etc.

## Custom Components
- Use SCSS for non-Spectrum components
- Follow existing conventions: .ComponentName_child

## Mixing Approaches
- Spectrum components: style props only
- Custom wrapper divs: SCSS classes for layout
```

NOTES Spectrum style props work inside custom SCSS layouts
NOTES Keep Spectrum and custom styling separate and clear

## Phase 6: Implementation Examples

### Task 6.1: Create Example Form Component
PATH src/examples/SpectrumFormExample.tsx

```typescript
import { Button, TextField, Flex, Heading } from '@adobe/react-spectrum'

export function SpectrumFormExample() {
  return (
    <Flex direction="column" gap="size-200" maxWidth="size-4600">
      <Heading level={2}>Example Form</Heading>
      
      <TextField 
        label="Email" 
        type="email" 
        isRequired 
      />
      
      <TextField 
        label="Password" 
        type="password" 
        isRequired 
      />
      
      <Button variant="accent" type="submit">
        Submit
      </Button>
    </Flex>
  )
}
```

VALIDATION Form renders correctly with Spectrum styling
VALIDATION Accessibility (keyboard nav, screen reader) works

### Task 6.2: Create Example with swc-react Gap Component
PATH src/examples/SwcReactExample.tsx

```typescript
import { Theme, Button } from '@swc-react/button'

export function SwcReactExample() {
  return (
    <Theme scale="medium" color="light">
      <Button variant="accent" onClick={() => alert('clicked')}>
        Gap-Filled Component
      </Button>
    </Theme>
  )
}
```

NOTES Only create when React Spectrum lacks needed component
VALIDATION Component works with same UX as React Spectrum components

### Task 6.3: Create Mixed Component Example
PATH src/examples/MixedSpectrumExample.tsx

```typescript
import { Flex, Heading } from '@adobe/react-spectrum'
import { Button } from '@/components/spectrum'
import { GapComponent } from '@swc-react/gap-component'

export function MixedSpectrumExample() {
  return (
    <Flex direction="column" gap="size-200">
      <Heading level={2}>Mixed Components</Heading>
      
      {/* React Spectrum (primary) */}
      <Button variant="accent">Primary Component</Button>
      
      {/* swc-react (gap-filling) */}
      <GapComponent>Gap Component</GapComponent>
    </Flex>
  )
}
```

VALIDATION Both component types work together without conflicts
VALIDATION Styling remains consistent across both

## Phase 7: Testing & Validation

### Task 7.1: Test Accessibility
TOOL Use browser dev tools accessibility inspector

CHECKLIST
- [ ] Keyboard navigation works (Tab, Enter, Arrows)
- [ ] Screen reader announces components correctly
- [ ] Focus indicators visible
- [ ] ARIA labels present and correct

VALIDATION All interactive components are keyboard accessible
VALIDATION No accessibility errors in dev tools

### Task 7.2: Test Theme Switching
Create theme toggle utility:

```typescript
const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light')

<Provider theme={defaultTheme} colorScheme={colorScheme}>
  <button onClick={() => setColorScheme(prev => prev === 'light' ? 'dark' : 'light')}>
    Toggle Theme
  </button>
  {/* App content */}
</Provider>
```

VALIDATION Theme switches without errors
VALIDATION All components respect color scheme

### Task 7.3: Test Bundle Size Impact
```bash
pnpm build
```

ACTION Check dist/ folder size before/after Spectrum
ACTION Analyze bundle with build tool analyzer if size concerning

NOTES React Spectrum uses tree-shaking
NOTES Only import what you use to minimize bundle size

### Task 7.4: Create Component Smoke Tests
PATH src/components/spectrum/__tests__/Button.test.tsx

```typescript
import { render, screen } from '@testing-library/react'
import { Button } from '../Button/Button'
import { SpectrumProvider } from '@/theme/SpectrumProvider'

describe('Button', () => {
  it('renders correctly', () => {
    render(
      <SpectrumProvider>
        <Button>Test Button</Button>
      </SpectrumProvider>
    )
    
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })
})
```

NOTES All Spectrum components need Provider wrapper in tests
VALIDATION Tests pass with proper setup

## Phase 8: Documentation & Team Onboarding

### Task 8.1: Create Team Quick Start Guide
PATH docs/spectrum-quick-start.md

```markdown
# Spectrum Quick Start

## Import Components
```typescript
import { Button, TextField } from '@/components/spectrum'
```

## Use Style Props
```typescript
<Button margin="size-100" width="size-2000">
  Click Me
</Button>
```

## Reference
- React Spectrum Docs: https://react-spectrum.adobe.com
- Component Props: Check each component's docs page
```

### Task 8.2: Create Migration Guide for Existing Components
PATH docs/migrating-to-spectrum.md

```markdown
# Migration Guide

## Before (Custom Component)
```typescript
<button className="Button Button--primary">
  Click Me
</button>
```

## After (Spectrum Component)
```typescript
<Button variant="accent">
  Click Me
</Button>
```

## Migration Checklist
1. Find equivalent Spectrum component
2. Map props (className → variant, etc.)
3. Replace style with style props
4. Test functionality and accessibility
5. Update related tests
```

### Task 8.3: Document Component Decision Tree
PATH docs/component-decision-tree.md

```markdown
# Component Decision Tree

## Choosing Components

1. Need a UI component?
   → Check React Spectrum docs first
   
2. Component exists in React Spectrum?
   ✅ Use React Spectrum
   
3. Component missing in React Spectrum?
   → Check Spectrum Web Components docs
   
4. Component exists in SWC?
   → Check if swc-react wrapper exists
   ✅ Use swc-react wrapper
   ❌ Create feature request or build custom
   
5. Need custom behavior?
   → Wrap Spectrum component in custom component
```

## Phase 9: Advanced Configuration

### Task 9.1: Set Up Custom Theme Tokens (Optional)
LINK https://react-spectrum.adobe.com/react-spectrum/theming.html

```typescript
import { theme } from '@adobe/react-spectrum'

const customTheme = {
  ...defaultTheme,
  // Customize tokens if needed
}
```

NOTES Only customize if design requires deviation from Spectrum
NOTES Most projects should use default theme

### Task 9.2: Configure Responsive Breakpoints
```typescript
import { useMediaQuery } from '@adobe/react-spectrum'

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  return (
    <Flex direction={isMobile ? 'column' : 'row'}>
      {/* Content */}
    </Flex>
  )
}
```

NOTES Spectrum components are responsive by default
NOTES Use media queries for custom responsive behavior

### Task 9.3: Set Up Storybook Integration (Optional)
PATH .storybook/preview.tsx

```typescript
import { SpectrumProvider } from '../src/theme/SpectrumProvider'

export const decorators = [
  (Story) => (
    <SpectrumProvider>
      <Story />
    </SpectrumProvider>
  ),
]
```

VALIDATION Storybook stories render with Spectrum theme
NOTES Helpful for component development and documentation

## Phase 10: Performance Optimization

### Task 10.1: Verify Tree Shaking
```bash
pnpm build
# Analyze bundle to confirm only used components included
```

ACTION Use webpack-bundle-analyzer or similar
VALIDATION Bundle doesn't include unused Spectrum components

### Task 10.2: Lazy Load Heavy Components
```typescript
import { lazy, Suspense } from 'react'

const HeavySpectrumComponent = lazy(() => 
  import('./HeavySpectrumComponent').then(m => ({ 
    default: m.HeavySpectrumComponent 
  }))
)

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavySpectrumComponent />
    </Suspense>
  )
}
```

NOTES Use for large components like Table, Calendar
VALIDATION Initial bundle size reduced

### Task 10.3: Monitor Bundle Size in CI
Add to package.json scripts:

```json
{
  "scripts": {
    "build:analyze": "vite build && vite-bundle-visualizer"
  }
}
```

ACTION Set bundle size budget in CI if needed
VALIDATION Build fails if bundle exceeds size limit

## Completion Checklist

PHASE 1 Dependencies
- [ ] React Spectrum installed
- [ ] swc-react packages installed (as needed)
- [ ] Versions verified compatible

PHASE 2 Theme
- [ ] Theme config created
- [ ] Provider component created
- [ ] App wrapped with Provider

PHASE 3 Planning
- [ ] Component inventory completed
- [ ] Gap analysis done
- [ ] Strategy documented

PHASE 4 Wrappers
- [ ] Component wrapper structure created
- [ ] Example wrappers implemented
- [ ] Barrel exports configured

PHASE 5 Styling
- [ ] Styling approach documented
- [ ] Token reference created
- [ ] Integration guide written

PHASE 6 Examples
- [ ] React Spectrum example created
- [ ] swc-react example created (if needed)
- [ ] Mixed usage example created

PHASE 7 Testing
- [ ] Accessibility tested
- [ ] Theme switching tested
- [ ] Bundle size verified
- [ ] Component tests written

PHASE 8 Documentation
- [ ] Quick start guide written
- [ ] Migration guide created
- [ ] Decision tree documented

PHASE 9 Advanced
- [ ] Custom theme configured (if needed)
- [ ] Responsive patterns documented
- [ ] Storybook integrated (if using)

PHASE 10 Performance
- [ ] Tree shaking verified
- [ ] Lazy loading implemented
- [ ] Bundle monitoring set up

## Troubleshooting

ISSUE Components not styled correctly
SOLUTION Verify Provider wraps entire app
SOLUTION Check theme prop passed to Provider

ISSUE TypeScript errors on Spectrum components
SOLUTION Update @types/react to compatible version
SOLUTION Check Spectrum version supports React version

ISSUE swc-react components don't work
SOLUTION Verify Theme wrapper around swc-react components
SOLUTION Check all @swc-react versions match

ISSUE Bundle size too large
SOLUTION Use tree-shaking (import from @adobe/react-spectrum)
SOLUTION Lazy load heavy components
SOLUTION Remove unused Spectrum packages

ISSUE Accessibility issues
SOLUTION Check Provider includes all necessary context
SOLUTION Verify proper ARIA labels on custom wrappers
SOLUTION Test with keyboard navigation and screen reader

## Additional Resources

DOCS React Spectrum: https://react-spectrum.adobe.com/react-spectrum/
DOCS Spectrum Web Components: https://opensource.adobe.com/spectrum-web-components/
DOCS swc-react Guide: https://opensource.adobe.com/spectrum-web-components/using-swc-react/
DOCS React Aria (underlying hooks): https://react-spectrum.adobe.com/react-aria/
DOCS Spectrum Design System: https://spectrum.adobe.com/

GITHUB React Spectrum: https://github.com/adobe/react-spectrum
DISCORD Adobe Spectrum: https://discord.gg/spectrum

## Version Management

RULE All Spectrum packages must use identical versions
CHECK Run: `pnpm list | grep -E "@adobe|@swc-react"`
UPDATE Update all together: `pnpm update @adobe/react-spectrum @swc-react/*`

NOTES Breaking changes rare but check changelog before major updates
NOTES Lock versions in package.json for production stability
