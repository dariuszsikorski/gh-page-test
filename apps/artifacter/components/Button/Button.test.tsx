import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
import { mockButtonProps } from './Button.mock';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Click Me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });
    
    it('renders all variants from mock data', () => {
      mockButtonProps.allVariants.forEach(({ variant, children }) => {
        const { container, unmount } = render(<Button variant={variant}>{children}</Button>);
        const button = container.querySelector(`.Button--${variant}`);
        expect(button).toBeInTheDocument();
        unmount();
      });
    });
    
    it('renders all sizes from mock data', () => {
      mockButtonProps.allSizes.forEach(({ size, children }) => {
        const { container, unmount } = render(<Button size={size}>{children}</Button>);
        const button = container.querySelector(`.Button--${size}`);
        expect(button).toBeInTheDocument();
        unmount();
      });
    });
    
    it('applies custom className', () => {
      const { container } = render(<Button className="custom-class">Test</Button>);
      const button = container.querySelector('.custom-class');
      expect(button).toBeInTheDocument();
    });
  });
  
  describe('Interactions', () => {
    it('calls onPress when clicked', async () => {
      const onPress = vi.fn();
      render(<Button onPress={onPress}>Click</Button>);
      
      await userEvent.click(screen.getByRole('button'));
      expect(onPress).toHaveBeenCalledTimes(1);
    });
    
    it('does not call onPress when disabled', async () => {
      const onPress = vi.fn();
      render(<Button onPress={onPress} isDisabled>Click</Button>);
      
      await userEvent.click(screen.getByRole('button'));
      expect(onPress).not.toHaveBeenCalled();
    });
    
    it('handles keyboard Enter key', async () => {
      const onPress = vi.fn();
      render(<Button onPress={onPress}>Press</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      await userEvent.keyboard('{Enter}');
      expect(onPress).toHaveBeenCalled();
    });
    
    it('handles keyboard Space key', async () => {
      const onPress = vi.fn();
      render(<Button onPress={onPress}>Press</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      await userEvent.keyboard(' ');
      expect(onPress).toHaveBeenCalled();
    });
  });
  
  describe('Accessibility', () => {
    it('has correct ARIA attributes when disabled', () => {
      render(<Button isDisabled>Disabled</Button>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('aria-disabled', 'true');
      expect(button).toBeDisabled();
    });
    
    it('is keyboard accessible', async () => {
      const onPress = vi.fn();
      render(<Button onPress={onPress}>Press</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      expect(document.activeElement).toBe(button);
      
      await userEvent.keyboard('{Enter}');
      expect(onPress).toHaveBeenCalled();
    });
    
    it('applies focus-visible styles', () => {
      render(<Button>Focus Test</Button>);
      const button = screen.getByRole('button');
      
      button.focus();
      expect(button).toHaveFocus();
    });
  });
  
  describe('Variants', () => {
    it('applies primary variant classes', () => {
      const { container } = render(<Button variant="primary">Primary</Button>);
      const button = container.querySelector('.Button--primary');
      expect(button).toBeInTheDocument();
    });
    
    it('applies secondary variant classes', () => {
      const { container } = render(<Button variant="secondary">Secondary</Button>);
      const button = container.querySelector('.Button--secondary');
      expect(button).toBeInTheDocument();
    });
    
    it('applies accent variant classes', () => {
      const { container } = render(<Button variant="accent">Accent</Button>);
      const button = container.querySelector('.Button--accent');
      expect(button).toBeInTheDocument();
    });
    
    it('applies negative variant classes', () => {
      const { container } = render(<Button variant="negative">Negative</Button>);
      const button = container.querySelector('.Button--negative');
      expect(button).toBeInTheDocument();
    });
  });
  
  describe('Sizes', () => {
    it('applies small size classes', () => {
      const { container } = render(<Button size="small">Small</Button>);
      const button = container.querySelector('.Button--small');
      expect(button).toBeInTheDocument();
    });
    
    it('applies medium size classes', () => {
      const { container } = render(<Button size="medium">Medium</Button>);
      const button = container.querySelector('.Button--medium');
      expect(button).toBeInTheDocument();
    });
    
    it('applies large size classes', () => {
      const { container } = render(<Button size="large">Large</Button>);
      const button = container.querySelector('.Button--large');
      expect(button).toBeInTheDocument();
    });
  });
});
