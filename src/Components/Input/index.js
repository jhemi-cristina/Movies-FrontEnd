import { InputItem } from "./styles";

const Input = ({ placeholder, icon, value, onChange }) => {
  return (
    <InputItem
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      icon={icon}
    />
  );
};

export { Input };
