import { Link } from "react-router-dom";
import { Formulario } from "../components/Formulario";
import styled from "styled-components";



export function Home() {
  return (
    <Total>
      
      <Link to="/admin/base">
        <Container>         
          <button>ir a administrador</button>
        </Container>
      </Link>
      <Compformulario>
        <Formulario />
      </Compformulario>
      <div>

     



      </div>
    </Total>
  );
}
const Total= styled.div`
  width: 100%;
  height: 100px;

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(216, 216, 216);
`;
const Compformulario = styled.div`
  position: absolute;
  width: 30%;
  right: 2%;
  top: 56px;

  background-color: rgb(236, 236, 236);
  height: 450px;

  border-radius: 10px;
  text-align: center;
`;
