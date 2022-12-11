import React from "react";
import { toDoContext } from "../toDoContext";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";


function AppUI() {
    const {
        error,
        loading,
        serachedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal
    } = React.useContext(toDoContext);

    return(
        <React.Fragment>
            <ToDoCounter />

            <ToDoSearch />

            <ToDoList>
                {error && <p>Hubo un error!!</p>}
                {loading && <p>Estamos cargando! awanta</p>}
                {(!loading && !serachedToDos.length) && <p>¡crea tus ToDos!</p>}
                
                {serachedToDos.map(toDo => (
                    <ToDoItem 
                        completed={toDo.completed} 
                        key={toDo.text} 
                        text={toDo.text}
                        onComplete = {() => completeToDo(toDo.text)}
                        onDelete = {() => deleteToDo(toDo.text)}
                    />
                ))}
            </ToDoList>

            {!!openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}

            <CreateToDoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI }