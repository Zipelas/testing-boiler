import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from '../src/App';
import { movies } from '../src/movies';

vi.mock('../src/utils', () => ({
  getRandomMovies: vi.fn(() => ['Mock One', 'Mock Two', 'Mock Three']),
}));

describe('App', () => {
  it('should render headline', () => {
    render(<App />);
    const headline = screen.getByText('Vite + React');
    expect(headline).toBeInTheDocument();
  });

  it('should show all movies in MovieList and today in DatePicker at start', () => {
    render(<App />);

    // MovieList visar alla filmer
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(movies.length);

    // DatePicker visar dagens datum
    const today = new Date().toISOString().split('T')[0];
    expect(screen.getByDisplayValue(today)).toBeInTheDocument();
  });

  it('should show 3 movies in MovieList when a date is selected', async () => {
    render(<App />);

    const dateInput = screen.getByLabelText(/datum/i);
    await userEvent.clear(dateInput);
    await userEvent.type(dateInput, '2025-12-31');

    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(screen.getByText('Mock One')).toBeInTheDocument();
    expect(screen.getByText('Mock Two')).toBeInTheDocument();
    expect(screen.getByText('Mock Three')).toBeInTheDocument();
  });

  it('should reset MovieList and DatePicker when clicking ResetButton', async () => {
    render(<App />);

    const dateInput = screen.getByLabelText(/datum/i);
    await userEvent.clear(dateInput);
    await userEvent.type(dateInput, '2025-12-31');

    const resetButton = screen.getByRole('button', { name: /återställ/i });
    await userEvent.click(resetButton);

    // DatePicker ska återställas till dagens datum
    const today = new Date().toISOString().split('T')[0];
    expect(screen.getByDisplayValue(today)).toBeInTheDocument();

    // MovieList ska visa alla filmer igen
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(movies.length);
  });
});
