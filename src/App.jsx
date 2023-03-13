import "./App.css";
import { Myroutes } from "./Routes/Myroutes";
import styled from "styled-components";

function App() {
  return (
    <Divtotal>
      <Myroutes/>
    </Divtotal>
  );
}

export default App;

const Divtotal = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  
  background-color: #ffffff;
`