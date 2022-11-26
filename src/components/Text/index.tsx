import { Fragment, ReactNode } from "react";
import { TextE } from "./enums";
import { StyledP } from "./styles";

export interface Prop {
  children: ReactNode,
  as: TextE
}

const Text = ({children, as}: Prop): JSX.Element => {
  const getContent = () => {
    switch (as) {
      case TextE.P:
        return <StyledP as={as}>{children}</StyledP>
      case TextE.H1:
        return <StyledP as={as}>{children}</StyledP>    
      default:
        return null;
    }
  }
	return (
		<Fragment>{getContent()}</Fragment>
	);
}

export default Text;
