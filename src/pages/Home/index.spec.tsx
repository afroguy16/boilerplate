import { render } from '@testing-library/react';
import Home from './';

test('renders learn react link', () => {
  const {baseElement} = render(<Home />);
  expect(baseElement).toBeTruthy ();
});
