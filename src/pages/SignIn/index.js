import { Background, Container, Form } from "./styles";
import { FaLock, FaRegEnvelope } from "react-icons/fa";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Container>
      <Form>
        <h1>RocketAnime</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="email" icon={FaRegEnvelope} />
        <Input placeholder="Senha" type="password" icon={FaLock} />
        <Button>Entrar</Button>
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
};

export { SignIn };
