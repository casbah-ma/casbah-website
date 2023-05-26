import { InputLabel, InputWrapper, StyledInput } from './Input.styles';

const Input = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
