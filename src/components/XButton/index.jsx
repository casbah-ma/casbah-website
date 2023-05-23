import { StyledBtn } from './XButton.styles';

const XButton = ({ children, onClick, rest }) => {
  return (
    <StyledBtn onClick={onClick} {...rest}>
      {children}
    </StyledBtn>
  );
};

export default XButton;
