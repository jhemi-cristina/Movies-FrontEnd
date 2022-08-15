import styled from "styled-components";

export const Container = styled.button`
  width: ${(props) => props?.width ?? "300px"};
  height: ${(props) => props?.height ?? "50px"};
  margin-top: 10px;
  background-color: #ff859b;
  color: #312e38;
  border-radius: 9px;
  cursor: pointer;
  border: none;
`;
