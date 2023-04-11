import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  button {
    padding: 20px;
    cursor: pointer;
    border: 1px solid #000;
  }

  input {
    padding: 20px 0px;
    font-size: 24px;
  }

  .one,
  .two,
  .three,
  .four {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;
