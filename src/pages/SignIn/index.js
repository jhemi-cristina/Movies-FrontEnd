import { Container, Form, HeaderPage, Image, Login } from "./styles";
import { InputItem } from "../../Components/Input/styles";

const SignIn = () => {
  return (
    <Container>
      {/* <Image
        src={backgroundImage}
        alt="Uma imagem de cinema, com cadeiras vermelhas."
      /> */}
      <HeaderPage>
        <h1>RocketAnime</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </HeaderPage>

      <Form>
        <p>Faça seu login</p>
        <Login>
          {/* <FaRegEnvelope /> */}
          <InputItem placeholder="E-mail" type="email" />
          <InputItem placeholder="Senha" type="password" />
        </Login>
      </Form>
    </Container>
  );
};

export { SignIn };
