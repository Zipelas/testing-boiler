import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DateComponent from './DateComponent';

describe('Date', () => {
  it('should show todays date', () => {
    render(<DateComponent date={new Date()} />);
    expect(screen.getByText(/today's date/i)).toBeInTheDocument();
  });
});
