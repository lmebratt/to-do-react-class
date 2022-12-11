import React from 'react';
import { toDoContext } from '../toDoContext';
import './ToDoCounter.css'

function ToDoCounter() {
    const { totalToDos, completedToDos } = React.useContext(toDoContext)
    return (
        <h2 className='ToDoCounter'>Has completado {completedToDos} de {totalToDos} TODOs</h2>
    );
};

export { ToDoCounter };