import { createElement, Fragment, ReactNode } from "react";
import { TextE } from "./enums";

export interface Prop {
  children: ReactNode,
  element: TextE
}

const Text = ({children, element}: Prop): JSX.Element => {
  const setupElement = () => {
    const content = createElement(element, undefined, children);
    return content;
  }

	return (
		<Fragment>
      {/* {setupElement()} */}
    </Fragment>
	);
}

export default Text;
