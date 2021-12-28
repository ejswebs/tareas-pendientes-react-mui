import React from "react";
import { BotonCrear } from '../BotonCrear';
import { Buscador } from '../Buscador';
import { Contador } from '../Contador';
import { ListaTareas } from '../ListaTareas';
import {ItemTareas} from '../ItemTareas';
import {AppContexto} from '../AppContexto'

function AppUI(){
    const {
        tareasBuscadas,
        toggleTarea,
        eliminarTarea,
            } = React.useContext(AppContexto);
 return(
    <React.Fragment>
        <BotonCrear/>
        <Contador />
        <Buscador />
        <ListaTareas>
            {tareasBuscadas.map(tarea =>(
            <ItemTareas
                key={tarea.key}
                text={tarea.text}
                completed={tarea.completed}
                onComplete= {() => {
                toggleTarea(tarea.key)
                }}
                onDelete= {() => {
                eliminarTarea(tarea.key)
                }}
            />
            ))}
        </ListaTareas>
    </React.Fragment>

 );   
}

export {AppUI}