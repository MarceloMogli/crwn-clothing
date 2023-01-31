import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
  @media screen and (max-width: 950px){
    flex-direction: column;
    align-items: center;
     
  }
  @media screen and (max-width: 800px){
    width: auto;
  }
  @media screen and (max-width: 400px){
    width: 300px;
  }
`;
