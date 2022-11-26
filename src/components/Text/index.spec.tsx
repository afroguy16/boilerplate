import { render, screen } from '@testing-library/react';

import Text from './';
import { TextE } from './enums';

describe('Text Component', () => {
  const children = 'Something works';

  // it("should return a p tag if p is pass to the 'as' prop and children to be the same as children passed", () => {
  //   const as = TextE.P;
  //   const {baseElement} = render(<Text as={as}>{children}</Text>)
  //   const element = baseElement.querySelector('p');
    
  //   expect(element).toBeTruthy();
  //   expect(element?.innerHTML).toBe(children);
  // })

  // it("should return a h1 tag if h1 is pass to the 'as' prop and children to be the same as children passed", () => {
  //   const as = TextE.H1;
  //   render(<Text as={as}>{children}</Text>)
  //   const element = screen.getByRole('heading', {level: 1});
    
  //   expect(element).toBeTruthy();
  //   expect(element?.innerHTML).toBe(children);
  // })

  // it("should return a h2 tag if h2 is pass to the 'as' prop and children to be the same as children passed", () => {
  //   const as = TextE.H2;
  //   render(<Text as={as}>{children}</Text>)
  //   const element = screen.getByRole('heading', {level: 2});
    
  //   expect(element).toBeTruthy();
  //   expect(element?.innerHTML).toBe(children);
  // })

  // it("should return a h3 tag if h3 is pass to the 'as' prop and children to be the same as children passed", () => {
  //   const as = TextE.H3;
  //   render(<Text as={as}>{children}</Text>)
  //   const element = screen.getByRole('heading', {level: 3});
    
  //   expect(element).toBeTruthy();
  //   expect(element?.innerHTML).toBe(children);
  // })

  // it("should return a h4 tag if h4 is pass to the 'as' prop and children to be the same as children passed", () => {
  //   const as = TextE.H4;
  //   render(<Text as={as}>{children}</Text>)
  //   const element = screen.getByRole('heading', {level: 4});
    
  //   expect(element).toBeTruthy();
  //   expect(element?.innerHTML).toBe(children);
  // })

  // it("should return a h5 tag if h5 is pass to the 'as' prop and children to be the same as children passed", () => {
  //   const as = TextE.H5;
  //   render(<Text as={as}>{children}</Text>)
  //   const element = screen.getByRole('heading', {level: 5});
    
  //   expect(element).toBeTruthy();
  //   expect(element?.innerHTML).toBe(children);
  // })

  // it("should return a h6 tag if h6 is pass to the 'as' prop and children to be the same as children passed", () => {
  //   const as = TextE.H6;
  //   render(<Text as={as}>{children}</Text>)
  //   const element = screen.getByRole('heading', {level: 6});
    
  //   expect(element).toBeTruthy();
  //   expect(element?.innerHTML).toBe(children);
  // })
});
