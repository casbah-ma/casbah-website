import { InputLabel, InputWrapper, StyledInput } from "./Input.styles";

const Input = ({ label, type, name, value, placeholder }) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput name={name} type={type} vlaue={value} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Input;
