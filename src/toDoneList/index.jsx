import React, { useState } from 'react';
import TodoItem from "./components/TodoItem";
import './toDoneList.css';

function toDoneList() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
      <div className="toDonelist">
          <div className="toDoneheading">
              <h1 className="toDonetitle">To-Done List</h1>
          </div>
              <input
                  type="text"
                  value={input}
                  onChange={(event) => {setInput(event.target.value)}}
              />
              <button onClick={addItem}>Add</button>

            <h1>To Do Tasks</h1>
          <div className="toDoitems">
            <ul>
                {items.map((item, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        item={item}
                        onCheck={removeItem}
                        show={!show}
                    />
                ))}
            </ul>
            
          </div>
          <div className="Doneitems">
          <h1>Completed Tasks</h1>
          <ul>
                {items.map((item, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        item={item}
                        onCheck={removeItem}
                        show={show}
                    />
                ))}
            </ul>
          </div>
      </div>
    );
}
export default toDoneList;