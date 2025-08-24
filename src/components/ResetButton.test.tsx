import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ResetButton from './ResetButton';

describe('ResetButton', () => {
  it('should have rebeccapurple background color', () => {
    render(<ResetButton onReset={vi.fn()} />);
    expect(screen.getByRole('button')).toHaveClass('bg-[#663399]');
  });

  it("should display the text 'Återställ'", () => {
    render(<ResetButton onReset={vi.fn()} />);
    expect(screen.getByRole('button')).toHaveTextContent('Återställ');
  });

  it('should call onReset when clicked', () => {
    const handleReset = vi.fn();
    render(<ResetButton onReset={handleReset} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleReset).toHaveBeenCalledOnce();
  });
});
