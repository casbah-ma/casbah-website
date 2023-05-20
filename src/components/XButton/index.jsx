import { useState } from "react";
import { Bg, StyledBtn } from "./XButton.styles";

const XButton = ({ children, rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledBtn
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {children}
      <Bg isHovered={isHovered} />
    </StyledBtn>
  );
};

export default XButton;
