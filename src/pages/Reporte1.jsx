import { NavBar } from "../components/NavBar/NavBar";
import styled from "styled-components";
import { Ventastotales } from "../components/Cards/Cardventastotales";
import { Ganancias } from "../components/Cards/Ganancias";

export function Reporte1() {
  return (

    
 <Report1>
      <NavBar />
      <Ventastotales />
      <Ventastotales />
      <Ganancias />
    </Report1>
  );
}

const Report1 = styled.div`
  display: flex;  
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  

  @media screen and (min-width: 320px) and (max-width: 780px) {
    flex-direction: column;
    
  }
`;

const Container1 = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  background-color: rgb(0, 204, 143);
`;
