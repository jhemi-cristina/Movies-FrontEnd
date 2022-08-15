import { Buttons } from "./styles";

const Button = ({ title, value, type, onChange }) => {
  return (
    <Buttons title={title} value={value} onChange={onChange} type={type} />
  );
};

export { Button };
