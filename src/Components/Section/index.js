import { Container } from "./styles";
import { Tags } from "./../Tags";

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
