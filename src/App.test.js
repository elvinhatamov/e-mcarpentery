import { render, screen } from '@testing-library/react';
import App from './App';

test('renders E&M Carpentry website', () => {
  render(<App />);
  const titleElement = screen.getByText(/Crafting Excellence in Every Detail/i);
  expect(titleElement).toBeInTheDocument();
});
