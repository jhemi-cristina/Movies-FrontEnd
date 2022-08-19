import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  height: 105px;
  font-family: "Roboto Slab";
  font-style: normal;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #3e3b47;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  > h1 {
    color: #ff859b;
    font-size: 25px;
    font-weight: 900;
    line-height: 47px;
  }

  > input {
    width: 630px;
    height: 49px;
    border-radius: 10px;
    background: #262529;
    padding-left: 10px;
    color: #948f99;
    cursor: pointer;
    border: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 20px;
    color: #f4ede8;

    p {
      margin: 0px;
    }

    span {
      font-size: 14px;
      text-align: end;
    }

    strong {
      font-size: 18px;
    }
  }
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;
