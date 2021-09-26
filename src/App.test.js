import { render, screen } from '@testing-library/react';
import Header from './components/Header';


test('renders shopping-cart counter', () => {
  render(<Header />);
  const linkElement = screen.getByText(/type/i);
  expect(linkElement).toBeInTheDocument();
});

