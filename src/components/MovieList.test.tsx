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

    expect(screen.getByText(/Inga filmer hittades./i)).toBeInTheDocument();
  });
});
