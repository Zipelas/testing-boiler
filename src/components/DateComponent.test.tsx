import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DateComponent from './DateComponent';

describe('DateComponent', () => {
  it('should show the day number for the given date', () => {
    const date = new Date(2025, 7, 30);
    const expectedDay = date.toLocaleDateString('sv-SE', { day: 'numeric' });

    render(<DateComponent date={date} />);

    const el = screen.getByText(new RegExp(`^${expectedDay}$`));
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('text-[#663399]');
  });

  it('should display the correct day for another date', () => {
    const date = new Date(2025, 8, 7);
    const expectedDay = date.toLocaleDateString('sv-SE', { day: 'numeric' });

    render(<DateComponent date={date} />);

    const el = screen.getByText(new RegExp(`^${expectedDay}$`));
    expect(el).toBeInTheDocument();
  });
});
