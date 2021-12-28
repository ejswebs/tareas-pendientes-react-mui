import React from "react";
import { AppContexto } from "../AppContexto";
import "./Contador.css"

function Contador(){
    
    const { 
        tareasCompletas: completas,
        tareasTotales: totales,
        } = React.useContext(AppContexto);

    return (
        <h1 className="Contador">{`Completaste ${completas} de ${totales}`}</h1>
    )
}

export {Contador};