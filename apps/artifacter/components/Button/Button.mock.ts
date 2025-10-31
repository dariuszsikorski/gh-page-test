export const mockButtonProps = {
  default: { 
    variant: 'primary' as const, 
    size: 'medium' as const, 
    children: 'Click Me' 
  },
  disabled: { 
    variant: 'secondary' as const, 
    size: 'small' as const, 
    children: 'Disabled', 
    isDisabled: true 
  },
  allVariants: [
    { variant: 'primary' as const, children: 'Primary' },
    { variant: 'secondary' as const, children: 'Secondary' },
    { variant: 'accent' as const, children: 'Accent' },
    { variant: 'negative' as const, children: 'Delete' },
  ],
  allSizes: [
    { size: 'small' as const, children: 'Small' },
    { size: 'medium' as const, children: 'Medium' },
    { size: 'large' as const, children: 'Large' },
  ],
};

export const mockClickHandlers = {
  default: () => console.log('Button clicked'),
  alert: () => alert('Button clicked!'),
  logWithTimestamp: () => console.log(`Button clicked at ${new Date().toISOString()}`),
};
