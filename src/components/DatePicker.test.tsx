import { fireEvent, render, screen } from '@testing-library/react';
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

  it('should render the input field', () => {
    render(
      <DatePicker
        selectedDate='2025-08-25'
        onDateChange={vi.fn()}
      />
    );
    expect(screen.getByLabelText(/datum/i)).toBeInTheDocument();
  });

  it('should display the correct selected date', () => {
    const date = '2025-12-24';
    render(
      <DatePicker
        selectedDate={date}
        onDateChange={vi.fn()}
      />
    );
    expect(screen.getByDisplayValue(date)).toBeInTheDocument();
  });

  it('should call onDateChange when the date is changed', () => {
    const handleChange = vi.fn();
    render(
      <DatePicker
        selectedDate='2025-08-25'
        onDateChange={handleChange}
      />
    );

    fireEvent.change(screen.getByLabelText(/datum/i), {
      target: { value: '2025-12-31' },
    });

    expect(handleChange).toHaveBeenCalledWith('2025-12-31');
  });

  it('should have purple background and white text when a date is selected', () => {
    render(
      <DatePicker
        selectedDate='2025-08-25'
        onDateChange={vi.fn()}
      />
    );
    expect(screen.getByLabelText(/datum/i)).toHaveStyle({
      backgroundColor: 'rgb(102, 51, 153)', // #663399 i RGB
      color: 'rgb(255, 255, 255)', // white i RGB
    });
  });

  it('should have white background and black text when no date is selected', () => {
    render(
      <DatePicker
        selectedDate=''
        onDateChange={vi.fn()}
      />
    );
    expect(screen.getByLabelText(/datum/i)).toHaveStyle({
      backgroundColor: 'rgb(255, 255, 255)', // white i RGB
      color: 'rgb(0, 0, 0)', // black i RGB
    });
  });
});
