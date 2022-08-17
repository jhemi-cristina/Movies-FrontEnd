import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #3e3b47;

  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
    }

    strong {
      font-size: 18px;
    }
  }
`;
