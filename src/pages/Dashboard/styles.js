import styled from "styled-components";

export const Container = styled.div`
  background: #1c1b1e;
  max-width: 100%;
  min-height: 100vh;
  font-family: "Roboto Slab";
  font-style: normal;
`;

export const Movies = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  h1 {
    color: #ffffff;
    font-weight: 400;
  }

  Button {
    color: #1c1b1e;
    height: 48px;
    width: 207px;
  }
`;

export const TagsMovies = styled.div`
  margin-top: 30px;
`;

export const Card = styled.div`
  color: #999591;
  margin: 56px 0 28px;
`;
