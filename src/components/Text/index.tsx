import { Fragment, ReactNode } from "react";
import { TextE } from "./enums";
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6, StyledP } from "./styles";

export interface Prop {
  children: ReactNode,
  as: TextE
}

const Text = ({children, as}: Prop): JSX.Element => {
  const getContent = () => {
    switch (as) {
      case TextE.P:
        return <StyledP>{children}</StyledP>
      case TextE.H1:
        return <StyledH1>{children}</StyledH1>
      case TextE.H2:
        return <StyledH2>{children}</StyledH2>  
      case TextE.H3:
        return <StyledH3>{children}</StyledH3>  
      case TextE.H4:
        return <StyledH4>{children}</StyledH4>  
      case TextE.H5:
        return <StyledH5>{children}</StyledH5>  
      case TextE.H6:
        return <StyledH6>{children}</StyledH6>      
      default:
        return null;
    }
  }
	return (
		<Fragment>{getContent()}</Fragment>
	);
}

export default Text;
