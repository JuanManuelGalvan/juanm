import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.png";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/">
            <h1>Inicio</h1>
            </Link>
            <Link to="/productos">
            <h1>Productos</h1>
            </Link>
            <img src={Portada} alt=""/>
        </div>
    )
}
