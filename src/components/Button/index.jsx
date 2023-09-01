import { StyledBtn } from './Button.styles';

const Button = ({ children, variant, disabled, rest }) => {
  return (
    <StyledBtn variant={variant} disabled={disabled} {...rest}>
      {children}
    </StyledBtn>
  );
};

export default Button;
