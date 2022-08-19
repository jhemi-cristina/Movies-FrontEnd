import { Container } from "./styles";

const Section = ({ icon, title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {icon}
      {children}
    </Container>
  );
};

export { Section };
