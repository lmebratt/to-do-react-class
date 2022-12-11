import React from "react";
import { toDoContext } from "../toDoContext";
import './ToDoSearch.css'

function ToDoSearch() {
    const { searchValue, setSerachValue } = React.useContext(toDoContext);
    
    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSerachValue(e.target.value);
    }

    return (
        <input
            placeholder='ToDos'
            className="ToDoSearch"
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
};

export { ToDoSearch };