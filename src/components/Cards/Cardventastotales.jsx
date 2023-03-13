import styled from "styled-components";
import { themeColor, hoverEffect } from "../../utils/utils";


export function Ventastotales() {
  return (
    <Container>
      <h1>Ventas totales55254</h1>
    </Container>
  );
}

const Container = styled.div`
  height: 250px;
  width: 28rem;
  background-color: ${themeColor};
  
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  margin: 1rem;
  

  @media screen and (min-width: 320px) and (max-width: 780px) {
    width: 90%;
    margin: 5px auto;
  }
`;
