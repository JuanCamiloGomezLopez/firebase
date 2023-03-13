import { useState } from "react";
import "./tableinfo_style.css";

export function Tableinfo({ newdatobase, handleDeletebd, search, contador }) {

  const searchtovalue = search.toLowerCase();

  return (
    <div>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Reserva</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Conductor</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {newdatobase?.filter((items) => {
              if (search === "") return items;
              if (
                items.nombre.toString().toLowerCase().includes(searchtovalue) ||
                items.id.toString().toLowerCase().includes(searchtovalue)
              )               
                return items;
            })
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.email}</td>
                  <td>{item.telefono}</td>
                  <td>{item.origen}</td>
                  <td>{item.destino}</td>
                  <td>{item.conductor}</td>
                  <td>
                    <button
                      className="btneliminar"
                      onClick={() => handleDeletebd(item.id)}
                    >
                      ELIMINAR
                    </button>
                  </td>
                </tr>                
              );              
            })            
            }            
          </tbody>
        </table>
      </div>
    </div>
  );
}
