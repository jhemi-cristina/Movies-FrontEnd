import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  width: ${(props) => props?.width ?? "300px"};
  height: ${(props) => props?.height ?? "50px"};
  border-radius: 9px;
  border-style: none;
  cursor: pointer;
  border: none;
  background-color: #262529;
`;
