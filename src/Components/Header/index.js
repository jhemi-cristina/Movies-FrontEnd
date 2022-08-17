import { Container, Profile } from "./styles";
import { Input } from "./../Input";
import { Link } from "react-router-dom";
import photouser from "./../../Assets/photouser.jpeg";

const Header = () => {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <img src={photouser} alt="Imagem de perfil" />
        <div>
          <p>Jhemily Cristina</p>
          <span>Sair</span>
        </div>
      </Profile>
    </Container>
  );
};

export { Header };
