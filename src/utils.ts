export function getRandomMovies(allMovies: string[], count: number): string[] {
  const shuffled = [...allMovies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
