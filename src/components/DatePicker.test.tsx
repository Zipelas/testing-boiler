import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  it('should show the current date', () => {
    const today = new Date().toISOString().split('T')[0];
    render(
      <DatePicker
        selectedDate={today}
        onDateChange={vi.fn()}
      />
    );
    expect(screen.getByDisplayValue(today)).toBeInTheDocument();
  });
});
