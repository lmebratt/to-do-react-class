import React from "react";
import { toDoContext } from "../toDoContext";
import "./ToDoForm.css"

function ToDoForm() {
    const [newToDoValue, setNewToDoValue] = React.useState('')
    const { addToDo, setOpenModal } = React.useContext(toDoContext)

    const onChange = (e) => {
        setNewToDoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                value={newToDoValue}
                onChange={onChange}
                placeholder="Cortar cebolla para el almuerzo"
            />
            <div className="toDoForm-buttonContainer">
                <button className="toDoForm-button toDoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="toDoForm-button toDoForm-button--add" type="submit" onClick={onSubmit}>Añadir</button>
            </div>
        </form>
    );
}

export { ToDoForm }