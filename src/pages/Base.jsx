import { Tableinfo } from "../components/Tableinfo";
import { NavBar } from "../components/NavBar/NavBar";
import "./base.css";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../data/firebase";

export function Base() {
  const [newdatobase, setNewdatobase] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "aprobados"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      var datosArraya = [];
      querySnapshot.forEach((doc) => {
        datosArraya.push({ ...doc.data(), id: doc.id });
      });
      console.log("se ejecuto el useefect de base");
      setNewdatobase(datosArraya);
    });
    return () => unsub();
  }, []);

  const handleDeletebd = async (id) => {
    await deleteDoc(doc(db, "aprobados", id));
  };

  const [search, setSearch] = useState("");
  const [searchcond, setSearchcond] = useState("");
  const [contador, setContador] = useState(0);

  const searchconductor = () => {
    const filterdata = newdatobase.filter((item) =>
      item.conductor.toString().toLowerCase().includes(searchcond.toLowerCase())
    );
    setNewdatobase(filterdata);
    setContador(filterdata.length);
  };

  return (
    <div className="base">
      <NavBar />
      <h1>BASE DE DATOS</h1>

      <div className="container-buscador">
        <div className="buscar">
          <input
            className="input-buscar"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Buscar por nombre o reserva"
            value={search}
            name="buscar"
          />
        </div>

        <div className="select-filtrar">
          <select
            className="filtrar"
            name="Filtrar"
            onChange={(e) => {
              setSearchcond(e.target.value);
            }}
            value={searchcond}
          >
            <option>Conductor</option>
            <option className="opt" value="Cesar">
              Cesar
            </option>
            <option className="opt" value="Manuel">
              Manuel
            </option>
            <option className="opt" value="Oscar">
              Oscar
            </option>
          </select>
          <button className="btnfiltrar" onClick={searchconductor}>
            FILTRAR
          </button>
          <button className="btnrest" onClick={() => window.location.reload()}>
            X
          </button>
        </div>

        <div className="contador">
          <h3 style={{ display: !contador && "none" }}>
            Se encontraron {contador} elementos
          </h3>
        </div>
      </div>

      <div>
        <Tableinfo
          newdatobase={newdatobase}
          handleDeletebd={handleDeletebd}
          search={search}
          contador={contador}
        />       
      </div>
    </div>
  );
}
