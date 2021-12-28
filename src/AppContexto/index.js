import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const AppContexto = React.createContext();

function AppProvider(props) {

    const [tareas, guardarTarea] = useLocalStorage("tareasGuardadas",[]);
    const [valorBuscado, setValorBuscado] = React.useState('');
  
    const tareasCompletas = tareas.filter(tarea => !!tarea.completed).length;
    const tareasTotales = tareas.length;
  
    let tareasBuscadas = [];
  
    if (!valorBuscado >= 1) {
      tareasBuscadas = tareas;
    }else{
      tareasBuscadas = tareas.filter(tarea => {
                const tareaText= tarea.text.toLowerCase();
                const tareaBuscada = valorBuscado.toLowerCase();
                return tareaText.includes(tareaBuscada);
              })
    }

  
    const toggleTarea = (key) => {
      const indice = tareas.findIndex( tarea => tarea.key === key);
      const nuevasTareas = [...tareas];
      if (!tareas[indice].completed){    
        tareas[indice].completed=true;
      } else {
        tareas[indice].completed=false;
      }
    guardarTarea(nuevasTareas);
    }
  
    const eliminarTarea = (key) => {
      const indice = tareas.findIndex( tarea => tarea.key === key);
      const nuevasTareas = [...tareas];
        nuevasTareas.splice(indice, 1);
        guardarTarea(nuevasTareas);
    }

    const [tareaAdd, setTareaAdd] = React.useState();

    const agregarTarea = (nuevaTarea) => {
        if (!nuevaTarea){
/*             setErrorModalAdd=true; */
        }else{
        const nuevasTareas = [...tareas];
        nuevasTareas.push({
                        key: tareas.length,
                        text: nuevaTarea,
                        completed: false});
        guardarTarea(nuevasTareas);
        setTareaAdd('')
        setOpenAdd(false)
        }
    }
  

    const [openAdd, setOpenAdd] = React.useState(false);


    
    

    return (
        <AppContexto.Provider 
            value={{
                tareasTotales,
                tareasBuscadas,
                tareasCompletas,
                eliminarTarea,
                toggleTarea,
                valorBuscado,
                setValorBuscado,
                openAdd, 
                setOpenAdd,
                agregarTarea,
                tareaAdd,
                setTareaAdd,


            }}>
            {props.children}
        </AppContexto.Provider>
    )
}


export {AppProvider, AppContexto}