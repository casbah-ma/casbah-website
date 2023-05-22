import { StyledBtn } from './XButton.styles';

const XButton = ({ children, rest }) => {
  return <StyledBtn {...rest}>{children}</StyledBtn>;
};

export default XButton;
