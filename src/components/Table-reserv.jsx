import { useState, useEffect } from "react";
import { Infointobd } from "./Infointobd";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../data/firebase";
import styled from "styled-components";


export function Tablereserv() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "servicios"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let datosArray = [];
      querySnapshot.forEach((doc) => {
        datosArray.push({ ...doc.data(), id: doc.id, conductor: "" });
      });
      console.log("se ejecuto el useefect de reservas");
      setDatos(datosArray);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "servicios", id));
  };

  return (
    <div>
      <Titulos>
        <h3>Nombre</h3>
        <h3>Email</h3>
        <h3>Telefono</h3>
        <h3>Origen</h3>
        <h3>Destino</h3>
        <h3>Conductor</h3>
        <h3>Eliminar</h3>
        <h3>Aprobar</h3>
      </Titulos>

      {datos.map((item) => (
        <Infointobd datos={item} handleDelete={handleDelete} key={item.id} />
      ))}
    </div>
  );
}

const Titulos = styled.div`
  background: #1e2544;
  border-radius: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 20% 10% 10% 10% 10% 8% 8%;
  justify-content: space-between;
  border: solid 1px rgb(212, 212, 212);
  h3 {
    font-weight: 500;
    color: white;
    padding: 2px 5px;
    font-size: 0.85rem;
    font-weight: 100;    
    border: none;    
    
  }
`;
