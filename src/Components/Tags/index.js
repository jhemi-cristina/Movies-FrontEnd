import { Container, Title, Titlemovies } from "./styles";

const Tags = ({ title, ...rest }) => {
  return <Container {...rest}>{title}</Container>;
};

export { Tags };
