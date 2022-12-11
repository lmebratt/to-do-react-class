import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../toDoContext';

// const defaultToDos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Curso de React', completed: false },
//   { text: 'Llrar con llorona', completed: false }
// ];

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export { App };
