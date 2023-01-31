import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 950px){
    margin-top: 50px;
  }
  @media screen and (max-width: 400px){
    width: 200px;
  }
`;
