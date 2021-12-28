import React from 'react';
import { AppUI } from './AppUI';
import {AppProvider} from '../AppContexto';

/* const preTareas = [
  { text: "Tarea 1", completed: false },
  { text: "Tarea 2", completed: false },
  { text: "Tarea 3", completed: false },
  { text: "Tarea 4", completed: false },
  { text: "Tarea 5", completed: false },
  { text: "Tarea 6", completed: true },
  { text: "Tarea 7", completed: true },
  { text: "Tarea 8", completed: true },
  { text: "Tarea 9", completed: false },
  { text: "Tarea 10", completed: false },
  { text: "Tarea 11", completed: false },
  { text: "Tarea 12", completed: true },
  { text: "Tarea 13", completed: false },
  { text: "Tarea 14", completed: false },
  { text: "Tarea 15", completed: false },
  { text: "Tarea 16", completed: false },
  { text: "Tarea 17", completed: false },
  { text: "Tarea 18", completed: false },
  { text: "Tarea 19", completed: false },
]; */



function App() {



  return (
  
    <AppProvider>
        <AppUI
        
        />
    </AppProvider>
  );
}

export default App;
