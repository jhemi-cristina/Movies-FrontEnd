import styled from "styled-components";
import backgroundImg from "../../Assets/backgroundImage.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1c1b1e;

  > h1 {
    font-size: 48px;
    color: #ff859b;
    margin: 0px;
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    color: #f4ede8;
  }

  > p {
    font-size: 14px;
    color: #cac4cf;
    margin: 0px;
  }

  > a {
    margin-top: 60px;
    color: #ff859b;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    display: flex;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
