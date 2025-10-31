# Feature Specification Template v2.0

- INFO Universal template for AI-assisted feature development - Context Engineering optimized
- GOAL Single source of truth with proven patterns to reduce hallucinations by 20-80%
- REQUIREMENT Copy to `.features/YYYY-MM-DD-FEATURE_NAME.spec.md` for each new feature
- NOTE Replace [brackets] with actual details - be specific, AI is literal-minded

---

## Feature Identity & Context Layers

**Feature:** [Clear Feature Name - 2-5 words]  
**Type:** New Feature | Port/Migration | Enhancement | Bug Fix  
**Status:** Draft | Ready | In Progress | Complete  
**Owner:** [Name]  
**Created:** YYYY-MM-DD  
**Token Budget:** ~[X]K tokens estimated for full context

### Business Layer
**Problem Statement:** [What user pain does this solve? Be specific]  
**User Story:** As a [role], I want to [action], so that [measurable value]  
**Success Metrics:** 
- [Metric 1] - [target value/threshold]
- [Metric 2] - [target value/threshold]

### Functional Layer
**Core Behaviors:**
1. [Behavior 1] - [Brief description]
2. [Behavior 2] - [Brief description]
3. [Behavior 3] - [Brief description]

**User Journey:** [Start] → [Action] → [Decision] → [Outcome]

---

## Reference Context (RAG Grounding)

**External Documentation:**
- [Library Docs URL] - [What to reference]
- [API Docs URL] - [Endpoints/schemas]
- [Design System] - [Components to use]

**Internal References:**
- [../path/to/similar/feature] - Pattern to follow
- [../path/to/shared/utils] - Reuse these
- [../conventions.md] - Project standards

**Original Source (for ports):**
```
Original: [absolute/path/to/original/component.vue]
Service:  [absolute/path/to/original/service.ts]  
Store:    [absolute/path/to/original/store.ts]
Tests:    [absolute/path/to/original/tests/]
```

---

## Constraints & Boundaries (Hallucination Prevention)

### Technical Constraints
```typescript
// EXPLICIT CONSTRAINTS - AI must respect these limits
const CONSTRAINTS = {
  maxBundleSize: '50KB',      // Hard limit
  browserSupport: ['Chrome 90+', 'Firefox 88+', 'Safari 14+'],
  forbiddenLibs: ['jquery', 'lodash'],  // Do NOT use
  requiredLibs: ['@spectrum-web-components'],  // Must use
  performance: {
    initialRender: '<100ms',
    interaction: '<200ms',
    listRender: '<500ms for 100 items'
  }
};
```

### Data Constraints
```typescript
// VALID RANGES - Prevent impossible values
interface DataConstraints {
  userId: string;           // UUID v4 format
  age: number;             // Range: [0, 120]
  price: number;           // Positive, 2 decimal places
  quantity: number;        // Positive integer > 0
  status: 'draft' | 'active' | 'archived';  // Enum only
}
```

---

## Scope Definition (Clear Boundaries)

### IN SCOPE ✅
- [ ] User can [specific action with measurable outcome]
- [ ] System [specific behavior] when [specific condition]
- [ ] Error handling for [specific scenario]
- [ ] Logging for [specific events]
- [ ] Accessibility: [specific WCAG requirements]

### OUT OF SCOPE ❌
- [ ] [Feature] - Reason: Phase 2
- [ ] [Feature] - Reason: Different epic
- [ ] [Feature] - Reason: Not in MVP

### EXPLICITLY FORBIDDEN ⛔
- Do NOT add [feature] even if it seems helpful
- Do NOT optimize [aspect] prematurely
- Do NOT change [existing pattern]

---

## Acceptance Criteria (Test-Driven Specs)

### Scenario 1: Happy Path
```gherkin
Given user is authenticated with role "admin"
  And feature flag "new_feature" is enabled
When user clicks "Create Item" button
Then modal appears within 200ms
  And focus moves to first input field
  And screen reader announces "Create new item dialog"
```

### Scenario 2: Error Handling
```gherkin
Given API endpoint is returning 500 errors
When user submits the form
Then error toast appears with message "Unable to save. Please try again."
  And form data is preserved
  And retry button is visible
  And error is logged with context
```

### Scenario 3: Edge Case
```gherkin
Given user has exactly 100 items (at limit)
When user attempts to create item #101
Then warning appears "You've reached the maximum of 100 items"
  And create button is disabled
  And upgrade link is shown
```

---

## Few-Shot Examples (Canonical Cases)

### Example Input/Output 1: Normal Case
```typescript
// INPUT
const request = {
  name: "Project Alpha",
  startDate: "2024-01-15",
  teamSize: 5
};

// EXPECTED OUTPUT
const response = {
  id: "uuid-here",
  name: "Project Alpha",
  startDate: "2024-01-15",
  teamSize: 5,
  status: "active",
  createdAt: "2024-01-10T10:30:00Z"
};
```

### Example Input/Output 2: Edge Case
```typescript
// INPUT - Minimal required fields only
const request = {
  name: "X"  // Single character name
};

// EXPECTED OUTPUT
const response = {
  id: "uuid-here",
  name: "X",
  startDate: null,      // Optional field absent
  teamSize: 1,          // Defaults to 1
  status: "draft",      // Default status
  createdAt: "2024-01-10T10:30:00Z"
};
```

### Example Input/Output 3: Error Case
```typescript
// INPUT - Invalid data
const request = {
  name: "",           // Empty name
  teamSize: -5       // Negative number
};

// EXPECTED OUTPUT
const response = {
  error: true,
  code: "VALIDATION_ERROR",
  errors: [
    { field: "name", message: "Name is required" },
    { field: "teamSize", message: "Team size must be positive" }
  ]
};
```

---

## Type Contracts (Formal Interfaces)

### Component Interface
```typescript
// EXACT CONTRACT - AI must match these types precisely
interface FeatureNameProps {
  // REQUIRED (no ? symbol)
  id: string;                     // Component instance ID
  onSave: (data: FeatureData) => Promise<void>;
  
  // OPTIONAL (with ? symbol)  
  initialData?: FeatureData;      // Pre-populate if provided
  disabled?: boolean;              // Disable all interactions
  className?: string;              // Additional CSS classes
}

interface FeatureNameState {
  data: FeatureData;              // Current form data
  errors: ValidationError[];      // Active validation errors  
  isLoading: boolean;            // Async operation in progress
  isDirty: boolean;              // User modified data
}

interface FeatureNameActions {
  validate(): ValidationError[];
  save(): Promise<SaveResult>;
  reset(): void;
  setField<K extends keyof FeatureData>(
    field: K, 
    value: FeatureData[K]
  ): void;
}
```

### Data Models
```typescript
interface FeatureData {
  id: string;                    // UUID v4
  name: string;                  // 1-100 chars
  description?: string;          // 0-500 chars
  priority: 1 | 2 | 3 | 4 | 5;  // Enum range
  tags: string[];                // 0-10 items
  metadata: Record<string, unknown>;
}

type SaveResult = 
  | { success: true; data: FeatureData }
  | { success: false; error: AppError };
```

---

## Mock Implementation Strategy

### Mock Files Required
```typescript
// FeatureName.mock.ts - Realistic test data
export const mockValidData: FeatureData[] = [
  // 5-10 realistic examples covering various states
];

export const mockErrorCases = {
  validation: { /* validation error response */ },
  network: { /* 500 error response */ },
  unauthorized: { /* 403 error response */ },
  rateLimit: { /* 429 error response */ }
};

export const mockEdgeCases = {
  empty: [],
  single: [/* one item */],
  maximum: [/* 100 items - at limit */],
  unicode: { name: "项目 🚀" },  // Unicode handling
  longText: { description: "x".repeat(500) }
};
```

### Mock-First Development Flow
```typescript
// Step 1: Use mocks during development
const useData = () => {
  const isDev = import.meta.env.DEV;
  return isDev 
    ? Promise.resolve(mockValidData)
    : api.fetchRealData();
};

// Step 2: Tests run on mocks (fast, offline)
test('handles empty state', () => {
  render(<Feature data={mockEdgeCases.empty} />);
  expect(screen.getByText('No items')).toBeInTheDocument();
});

// Step 3: Gradual real implementation
const FEATURE_FLAGS = {
  useRealAPI: false,      // Start with mocks
  useRealAuth: false,     // Gradually enable
  useRealStorage: true    // Can mix mock/real
};
```

---

## Architecture & Patterns

### File Structure (Triplet Pattern)
```
src/features/FeatureName/
├── FeatureName.tsx              # Component (view logic)
├── FeatureName.test.tsx         # Tests (run on mocks)
├── FeatureName.mock.ts          # Mock data (realistic)
├── FeatureName.module.scss      # Styles (BEM-like)
├── useFeatureName.ts            # Hook (business logic)
├── FeatureNameService.ts       # API client
├── types.ts                     # TypeScript contracts
└── utils.ts                     # Pure functions
```

### State Management Pattern
```typescript
// Composable/Hook pattern with clear separation
const useFeatureName = (props: FeatureNameProps) => {
  // State (single source of truth)
  const [state, setState] = useState<FeatureNameState>(initialState);
  
  // Derived values (computed/memo)
  const isValid = useMemo(() => 
    state.errors.length === 0 && state.isDirty
  , [state.errors, state.isDirty]);
  
  // Actions (state mutations)
  const actions: FeatureNameActions = {
    save: async () => {
      setState(s => ({ ...s, isLoading: true }));
      try {
        const result = await api.save(state.data);
        // Handle success
      } catch (error) {
        // Handle error  
      } finally {
        setState(s => ({ ...s, isLoading: false }));
      }
    }
  };
  
  return { state, actions, computed: { isValid } };
};
```

---

## Validation & Error Handling

### Input Validation (Frontend)
```typescript
const validateField = (field: string, value: unknown): string | null => {
  switch(field) {
    case 'name':
      if (!value) return 'Name is required';
      if (value.length > 100) return 'Name too long (max 100)';
      return null;
    
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Invalid email';
      return null;
      
    default:
      return null;
  }
};
```

### Error Recovery Strategy
```typescript
const errorRecovery = {
  network: {
    strategy: 'exponential-backoff',
    maxRetries: 3,
    baseDelay: 1000,
    showToast: true,
    preserveData: true
  },
  validation: {
    strategy: 'inline-errors',
    focusFirst: true,
    scrollToError: true
  },
  rateLimit: {
    strategy: 'queue-and-retry',
    delay: 60000,
    showCountdown: true
  }
};
```

---

## Performance & Monitoring

### Performance Targets
```typescript
const PERFORMANCE_BUDGETS = {
  bundleSize: { warning: 40_000, error: 50_000 },  // bytes
  firstPaint: { warning: 100, error: 200 },        // ms
  interaction: { warning: 50, error: 100 },        // ms
  apiLatency: { warning: 500, error: 1000 }        // ms
};
```

### Logging Strategy
```typescript
// Structured logging for AI debugging
const logger = {
  // Breadcrumb trail for debugging
  trace: (action: string, data?: unknown) => 
    console.log(`[FeatureName:${action}]`, data),
    
  // Key state changes
  info: (event: string, metadata?: unknown) =>
    console.info(`[FeatureName] ${event}`, metadata),
    
  // Recoverable errors
  warn: (message: string, error?: unknown) =>
    console.warn(`[FeatureName:Warning] ${message}`, error),
    
  // Critical failures
  error: (message: string, error: unknown, context?: unknown) =>
    console.error(`[FeatureName:Error] ${message}`, { error, context })
};
```

---

## Testing Strategy (TDD Focus)

### Test Categories
```typescript
describe('FeatureName', () => {
  // 1. Mock validation - Do mocks match contracts?
  describe('Mock Contract Validation', () => {
    it('mock data satisfies TypeScript interfaces', () => {
      // TypeScript compilation is the test
      const _: FeatureData[] = mockValidData;
    });
  });
  
  // 2. Component behavior - Using mocks
  describe('Component Behavior', () => {
    it('renders with mock data', () => {
      render(<Feature data={mockValidData} />);
      // Assertions
    });
    
    it('handles mock error cases', () => {
      // Test each error scenario
    });
  });
  
  // 3. Business logic - Pure functions
  describe('Business Logic', () => {
    it('calculates correctly', () => {
      expect(calculateTotal(mockValidData)).toBe(expected);
    });
  });
  
  // 4. Integration - Component + API (can use mocks)
  describe('Integration', () => {
    it('saves data successfully', async () => {
      // Can mock API or use real endpoint
    });
  });
});
```

### Coverage Requirements
- Statements: ≥80%
- Branches: ≥75%  
- Critical Paths: 100%
- Error Paths: 100%

---

## AI Tool Optimization

### Claude/Claude Code Instructions
```xml
<thinking>
Read the full spec before starting.
Identify which patterns from existing code to follow.
Check type contracts are satisfied.
Verify acceptance criteria will pass.
</thinking>

<approach>
1. Start with .mock.ts file - realistic data
2. Write .test.tsx using mocks  
3. Implement component to pass tests
4. Keep functions small (<25 lines)
5. Early return for errors
6. Log key execution points
</approach>
```

### Cursor-Specific Hints
```typescript
// @cursor-agent-prompt: Follow existing patterns in codebase
// @cursor-scope: Focus on FeatureName/* files only
// @cursor-test: Run tests after each change
// @cursor-no-change: Do not modify existing tests
```

### Common AI Pitfalls to Avoid
- ❌ Assuming requirements not in spec
- ❌ Adding "helpful" features not requested
- ❌ Changing established patterns
- ❌ Skipping error handling
- ❌ Forgetting accessibility
- ❌ Omitting logging

---

## Validation Checkpoints

### Pre-Implementation Checklist
- [ ] All type interfaces defined
- [ ] Mock data covers all scenarios
- [ ] Acceptance criteria are testable
- [ ] Constraints are explicit
- [ ] Examples show edge cases

### Implementation Checkpoints  
- [ ] Types match specification exactly
- [ ] All acceptance criteria have tests
- [ ] Mock tests pass before real implementation
- [ ] Error cases handled explicitly
- [ ] Logging added at key points

### Pre-Merge Validation
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Bundle size within budget
- [ ] Performance targets met
- [ ] Accessibility scan passing
- [ ] Security scan passing

---

## Migration Strategy (Mock → Production)

### Phase 1: Pure Mocks (Days 1-2)
```typescript
const SERVICE = {
  getData: async () => mockValidData,
  saveData: async (data) => mockSaveResponse
};
```

### Phase 2: Mixed Mode (Days 3-4)
```typescript
const SERVICE = {
  getData: async () => 
    FEATURE_FLAGS.useRealGet ? api.get() : mockValidData,
  saveData: async (data) =>
    FEATURE_FLAGS.useRealSave ? api.save(data) : mockSaveResponse
};
```

### Phase 3: Production (Day 5+)
```typescript
const SERVICE = {
  getData: () => api.get(),
  saveData: (data) => api.save(data)
};
// Keep mocks for testing only
```

---

## Specification Meta

**Specification Completeness:** [X]% complete  
**Estimated Context Tokens:** ~[X]K tokens  
**Confidence Level:** High | Medium | Low  
**Review Status:** Draft | Reviewed | Approved

**Revision History:**
- v1.0 - Initial specification
- v1.1 - Added error scenarios
- v1.2 - Refined after review

---

## Quick Reference for AI

```bash
# With Claude Code
claude "Read .features/YYYY-MM-DD-FEATURE.spec.md and implement with tests"

# With Cursor  
"Follow .features/FEATURE.spec.md exactly - start with mocks"

# Key Rules
1. Read FULL spec before starting
2. Create .mock.ts FIRST
3. Write tests BEFORE implementation  
4. Match types EXACTLY
5. Handle ALL error cases
6. Add logging for debugging
```
