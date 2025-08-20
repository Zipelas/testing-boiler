import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import DayComponent from './Day';

describe ('DayComponent', () => {
  test('Should show the correct day')
  // Arrange
  const day = new Date('2023-10-07');

  // Act
  const { getByText } = render(<DayComponent date={day} />);

  // Assert
  expect(getByText('Lördag')).toBeInTheDocument();
});
