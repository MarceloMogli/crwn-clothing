import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 400px){
    width: 200px;
  }
  
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px){
    flex-direction: column;
    justify-content: space-between;
  }
`;
