import { Container } from "./styles";

const Input = ({ placeholder, icon, value, onChange }) => {
  return (
    <Container
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      icon={icon}
    />
  );
};

export { Input };
