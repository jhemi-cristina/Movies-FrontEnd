import styled from "styled-components";

export const Buttons = styled.button`
  width: ${(props) => props?.width ?? "300px"};
  height: ${(props) => props?.height ?? "50px"};
  margin-top: 10px;
  margin-left: 10px;
  background-color: #ff859b;
  border-radius: 9px;
  cursor: pointer;
  border: none;
`;
