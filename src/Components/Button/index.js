import { Container } from "./styles";

const Button = ({ title, loading, ...rest }) => {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
};

export { Button };
