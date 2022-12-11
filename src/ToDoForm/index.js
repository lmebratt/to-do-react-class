import React from "react";
import { toDoContext } from "../toDoContext";

function ToDoForm() {
    let [newToDoValue, setNewToDoValue] = React.useState('')
    const { addToDo } = React.useContext(toDoContext)

    const onChange = (e) => {
        setNewToDoValue = e.target.value
    }

    const onCancel = () => {
        // pendiente
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(newToDoValue)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={newToDoValue}
                onChange={onChange}
                placeholder="Cortar cebolla para el almuerzo"
            />
            <div>
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit" onClick={onSubmit}>Añadir</button>
            </div>
        </form>
    );
}

export { ToDoForm }