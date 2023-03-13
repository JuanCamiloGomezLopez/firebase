import { useState } from "react";
import { db } from "../data/firebase";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { Botonagregar } from "./recursos/Botones";
import styled from "styled-components";

export const Formulario = () => {
  const initialvalue = {
    nombre: "",
    email: "",
    telefono: "",
    origen: "",
    destino: "",
  };
  const [datos, setDatos] = useState(initialvalue);

  const Insertar = async (e) => {
    e.preventDefault();
    if (datos !== initialvalue) {
      await addDoc(collection(db, "servicios"), {
        nombre: datos.nombre,
        email: datos.email,
        telefono: datos.telefono,
        origen: datos.origen,
        destino: datos.destino,
      });
      setDatos(initialvalue);
    }
  };

  const onchangeinput = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  return (
    <form onSubmit={Insertar}>
      <div>
        <Container>
          <Titulo>RESERVAS</Titulo>
          <Divuser>
            <p>Nombre</p>
            <input
              type="text"
              name="nombre"
              placeholder="Ingrese el nombre"
              onChange={onchangeinput}
              value={datos.nombre}
            />
          </Divuser>
          <Divuser>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Ingrese el email"
              onChange={onchangeinput}
              value={datos.email}
            />
          </Divuser>
          <Divuser>
            <p>Telefono</p>
            <input
              type="text"
              name="telefono"
              placeholder="Ingrese el telefono"
              onChange={onchangeinput}
              value={datos.telefono}
            />
          </Divuser>
          <Divuser>
            <p>Origen</p>
            <input
              type="text"
              name="origen"
              placeholder="Ingrese el origen"
              onChange={onchangeinput}
              value={datos.origen}
            />
          </Divuser>
          <Divuser>
            <p>Destino</p>
            <input
              type="text"
              name="destino"
              placeholder="Ingrese el destino"
              onChange={onchangeinput}
              value={datos.destino}
            />
          </Divuser>

          <Botonagregar>Insertar datoss</Botonagregar>
        </Container>
      </div>
    </form>
  );
};

const Container = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const Titulo = styled.h1`
  position: relative;
  color: rgb(5, 5, 5);
  margin-left: 15px;
  font-size: 1.5rem;
`;
const Divuser = styled.div`
  width: 100%;
  position: relative;
  display: block;
  input {
    width: 90%;
    border: solid 0.5px rgb(204, 204, 204);
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 8px;
  }
  p {
    width: 100%;
    font-weight: 500;
    font-size: 0.7rem;
    margin-bottom: 0.2rem;
    text-align: left;
    margin-left: 0.7rem;
  }
`;
