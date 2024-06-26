import { render, screen } from '@testing-library/react';
import Navbar1 from './PLS Construction/Navbar1';

test('renders learn react link', () => {
  render(<Navbar1 />);
  const linkElement = screen.getByText(/PLS CONSTRUCTIONS/i);
  expect(linkElement).toBeInTheDocument();
});
