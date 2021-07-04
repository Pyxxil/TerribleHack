import React from "react";

function TodoItem({ id, item, onCheck, show }) {
    if (!show) {
    return (
        <>
        <li
            onClick={() => {onCheck(id)}}
        >
            {item}  
        </li>
        </>
    )
    }
    else {
        return null;
    }
}

export default TodoItem;