import { InputLabel, InputWrapper, StyledInput } from "./Input.styles";

const Input = ({ label, type, name, value, placeholder }) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput value={value} name={name} type={type}  placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Input;
