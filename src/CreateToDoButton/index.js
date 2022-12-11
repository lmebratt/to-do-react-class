import React from "react";
import './CreateToDoButton.css'

function CreateToDoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button 
            onClick={onClickButton} 
            className="CreateToDoButton"
        >+</button>
    );
};

export { CreateToDoButton };