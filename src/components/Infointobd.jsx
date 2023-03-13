import { db } from "../data/firebase";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import "../data/firebase";
import { useState } from "react";
import styled from "styled-components";

export function Infointobd({ datos, handleDelete }) {
  const [newdato, setNewdato] = useState(datos);

  const oncahngeinputres = (even) => {
    const { name, value } = even.target;
    setNewdato({ ...newdato, [name]: value });
    console.log(value)
  };

  const Handaproved = async (e) => {
    e.preventDefault();
    if (newdato !== "") {
      await addDoc(collection(db, "aprobados"), {
        nombre: newdato.nombre,
        email: newdato.email,
        telefono: newdato.telefono,
        origen: newdato.origen,
        destino: newdato.destino,
        conductor: newdato.conductor,
      });
      handleDelete(newdato.id);
      console.log("se enviaron los datos a firebase");
    }
  };

  return (
    <Bodytable>       
      <input
        name="nombre"
        type="text"
        value={newdato.nombre}
        onChange={oncahngeinputres}
      />
      <input
        name="email"
        type="text"
        value={newdato.email}
        onChange={oncahngeinputres}
      />
      <input
        name="telefono"
        type="text"
        value={newdato.telefono}
        onChange={oncahngeinputres}
      />
      <input
        name="origen"
        type="text"
        value={newdato.origen}
        onChange={oncahngeinputres}
      />
      <input
        name="destino"
        type="text"
        value={newdato.destino}
        onChange={oncahngeinputres}
      />
      <select name="conductor" onChange={oncahngeinputres}>
                <option >Conductor</option>
                <option value="Cesar">Cesar</option>
                <option value="Manuel">Manuel</option>
                <option value="Oscar">Oscar</option>
              </select>
      <Btneliminar onClick={() => handleDelete(datos.id)}>
        ELIMINAR
      </Btneliminar>
      <Btneditar onClick={Handaproved}>
        APROBAR
      </Btneditar>
    </Bodytable>
  );
}

const Bodytable = styled.div`
  
  background-color: rgb(255, 255, 255);   
   border-radius: 5px;
   width: 100%;
   margin: 10px auto;
   padding: 3px;
   display: grid; 
   grid-template-columns: 15% 20% 10% 10% 10% 10% 8% 8%;      
   justify-content: space-between;
   border: solid 1px rgb(212, 212, 212); 

   input{
    padding: 8px 5px;
  font-size: 0.85rem;
  font-weight: 100;    
  border: none;    
  overflow: hidden;
  outline: none;
  text-align: center;
   }
`

const Btneditar = styled.button`
   background-color: rgb(182, 252, 141);
    border: none;
    padding: 4px 5px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
`

const Btneliminar = styled.button`
  background-color: rgb(255, 165, 165);
    border: none;    
    border-radius: 5px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
`