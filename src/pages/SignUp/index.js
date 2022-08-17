import { Background, Container, Form } from "./styles";
import { FaArrowLeft, FaLock, FaRegEnvelope } from "react-icons/fa";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container>
      <Form>
        <h1>RocketAnime</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" />
        <Input placeholder="E-mail" type="password" icon={FaRegEnvelope} />
        <Input placeholder="Senha" type="password" icon={FaLock} />
        <Button title="Entrar" />
        <Link to="/">
          <FaArrowLeft /> Voltar para o login
        </Link>
        -
      </Form>
      <Background />
    </Container>
  );
};

export { SignUp };
