import { render, screen } from '@testing-library/react';
import Nav from './Nav';

test('renders Skillet title', () => {
  render(<Nav />);
  const linkElement = screen.getByText((content, element) => {
    return content.startsWith("S") && content.endsWith("ILLET") && element.tagName.toLowerCase() === 'h1'
  })

  expect(linkElement).toBeInTheDocument()
});