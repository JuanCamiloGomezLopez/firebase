import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Base } from "../pages/Base";
import {Adminhome} from "../pages/Adminhome"
import { Reporte1 } from "../pages/Reporte1";
import  SignIn  from "../pages/SignIn";
import {Productos} from "../pages/Productos"

export function Myroutes() {
    return (
        <Router>
          
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/admin/base" element={<Base />} />                        
            <Route exact path="/admin/home" element={<Adminhome /> } />          
            <Route exact path="/admin/reportes/R1" element={<Reporte1 />} />
            <Route exact path="/admin/reportes/R2" element={<SignIn />} />
            <Route exact path="/admin/productos" element={<Productos />} /> 
          </Routes>
        </Router>
      );
}
