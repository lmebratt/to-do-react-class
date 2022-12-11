import React from "react";
import { useLocalStorage } from "./useLocalStorage.js"

const toDoContext = React.createContext();

function ToDoProvider(props) {
    const {
        item: toDos, 
        saveItem: saveToDos,
        loading,
        error
        } = useLocalStorage('ToDos_V0.1.1',[]);
        const [searchValue, setSerachValue] = React.useState('');
        const [openModal, setOpenModal] = React.useState(false);
        
        const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
        const totalToDos = toDos.length;
        
        let serachedToDos = [];
        
        if (!searchValue.length >= 1) {
            serachedToDos = toDos
        } else {
            serachedToDos = toDos.filter(toDo => {
            const toDoText = toDo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return toDoText.includes(searchText);
            })
        }
        
        const addToDo = (text) => {
            const newToDos = [...toDos];
        
            newToDos.push({
                completed: false,
                text
            });
            saveToDos(newToDos);
        }
        
        const completeToDo = (text) => {
            const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
            const newToDos = [...toDos];
        
            if (!!newToDos[toDoIndex].completed === false) {
            newToDos[toDoIndex].completed = true;
            saveToDos(newToDos);
            } else {
            newToDos[toDoIndex].completed = false;
            saveToDos(newToDos);
            }
        }
        
        const deleteToDo = (text) => {
            const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
            const newToDos = [...toDos];
            newToDos.splice(toDoIndex, 1);
            saveToDos(newToDos);
        }
    
    return(
        <toDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSerachValue,
            serachedToDos,
            addToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </toDoContext.Provider>
    );
};

export { toDoContext, ToDoProvider };