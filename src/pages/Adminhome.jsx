import { Tablereserv } from "../components/Table-reserv";
import styled from "styled-components";
import { NavBar } from "../components/NavBar/NavBar";

export function Adminhome() {
  return (
    <Home>
      <NavBar />
      <h1>APROBACIÓN RESERVAS</h1>
      <Tabla>
        <Tablereserv />
      </Tabla>
    </Home>
  );
}

const Home = styled.div`
  width: 100%;
  height: 100vh;
  h1 {
    position: absolute;    
    left: 20%;
  }
`;
const Tabla = styled.div`
  position: absolute;  
  width: 75%;
  right: 2%;
  top: 10%;
  background-color: rgb(255, 255, 255);
  height: 90%;
  padding: 0 10px;
  text-align: center;
  border-radius: 10px;
  overflow: scroll;
  z-index: 0;
`;
