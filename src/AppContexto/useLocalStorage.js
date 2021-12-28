import React from "react";

function useLocalStorage(elementosLocales,valorInicial){
  
    const elementos = localStorage.getItem(elementosLocales)
    let elementosFormateados;
    
    if (!elementos) {
      localStorage.setItem(elementosLocales,JSON.stringify(valorInicial));
      elementosFormateados=valorInicial;
    }else{
      elementosFormateados = JSON.parse(elementos);
    }
    
    
    const [elemento, setElementos] = React.useState(elementosFormateados);
    
    const guardarElementos = (nuevosElementos) => {
      localStorage.setItem(elementosLocales,JSON.stringify(nuevosElementos));
      setElementos(nuevosElementos);
    } 
  
    return [elemento, guardarElementos]
  };

  export {useLocalStorage}