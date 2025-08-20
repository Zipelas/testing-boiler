import { describe, expect, test } from 'vitest';
import MonthComponent from './Month';
import { render } from '@testing-library/react';

describe ('MonthComponent', () => {
    test('Should show the correct month')
  // Arrange
  const month = new Date('2023-03-15');

  // Act
  const { getByText } = render(<MonthComponent date={month} />);

  // Assert
  expect(getByText('Mars')).toBeInTheDocument();
});
