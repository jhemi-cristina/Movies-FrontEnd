import { Container, Profile } from "./styles";
import photouser from "./../../Assets/photouser.jpeg";

const Header = () => {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <p>Jhemily Cristina</p>
          <span>Sair</span>
        </div>
        <img src={photouser} alt="Imagem de perfil" />
      </Profile>
    </Container>
  );
};

export { Header };
