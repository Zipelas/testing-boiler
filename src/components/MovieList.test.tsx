import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MovieList from './MovieList';

describe('MovieList', () => {
  it('renders correct number of list items', () => {
    const movies = ['Inception', 'The Dark Knight', 'Interstellar'];
    render(<MovieList movies={movies} />);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(movies.length);
  });

  it('renders fallback text if no movies', () => {
    render(<MovieList movies={[]} />);
    expect(screen.getByText(/Inga filmer hittades\./i)).toBeInTheDocument();
  });

  // (1) Rätt innehåll visas
  it('renders all provided movie titles', () => {
    const movies = ['Inception', 'The Dark Knight', 'Interstellar'];
    render(<MovieList movies={movies} />);

    movies.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  // (3) Listan är scrollbar vid många element (overflow-y-auto)
  it('is scrollable when there are many items', () => {
    const movies = Array.from({ length: 20 }, (_, i) => `Movie ${i + 1}`);
    render(<MovieList movies={movies} />);

    const list = screen.getByRole('list');
    expect(list).toHaveClass('overflow-y-auto');
  });

  // (5) Edge case: väldigt långa titlar hanteras
  it('handles very long movie titles without crashing', () => {
    const longTitle = 'A'.repeat(300);
    render(<MovieList movies={[longTitle]} />);

    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });
});
