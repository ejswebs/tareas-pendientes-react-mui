import { TextField } from "@material-ui/core";
import React from "react";
import { AppContexto } from "../AppContexto";
import "./Buscador.css"

function Buscador() {

    const {valorBuscado,
            setValorBuscado} = React.useContext(AppContexto);
    const onValorBuscadoChange = (event) => {
        console.log(event.target.value);
        setValorBuscado(event.target.value);
    }
    return (

        <TextField 
        className="Buscador" 
        label="Buscador" 
        variant="outlined"
        value={valorBuscado}
        onChange={onValorBuscadoChange}
        />

    )
    
}

export {Buscador};