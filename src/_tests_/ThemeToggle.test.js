import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

test('toggles between dark and light mode', () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(button).toHaveTextContent('🌞 Light');

  fireEvent.click(button);
  expect(button).toHaveTextContent('🌙 Dark');
});
