import React from 'react';
import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';

const toDos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Curso de React', completed: false },
  { text: 'Llrar con llorona', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <ToDoCounter />

      <ToDoSearch />

      <ToDoList>
        {toDos.map(toDo => (
          <ToDoItem completed={toDo.completed} key={toDo.text} text={toDo.text} />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export { App };
