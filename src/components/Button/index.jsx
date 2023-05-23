import { StyledBtn } from './Button.styles';

const Button = ({ children, variant, rest }) => {
  return (
    <StyledBtn variant={variant} {...rest}>
      {children}
    </StyledBtn>
  );
};

export default Button;
