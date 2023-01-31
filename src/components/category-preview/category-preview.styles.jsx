import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  @media screen and (max-width: 1005px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  }

  @media screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 25px;
  }
`;
