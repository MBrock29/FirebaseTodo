import React, { useState, useEffect } from "react";
import Footer from "./Footer.js";
import { MdDeleteForever } from "react-icons/md";
import "./TodoList.css"

export default function Main(props) {
  const [todos, setTodos] = useState([
    { text: "Washing", isDone: false, priority: true },
    { text: "Cleaning", isDone: false, priority: false },
    { text: "Shopping", isDone: false, priority: false },
  ]);
  const [newItem, setNewItem] = useState("");
  function handleCheckbox(index) {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  }
  function handleSubmit(chore) {
    setTodos((todos) => [...todos, { text: chore, isDone: false }]);
  }
  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const itemCompletedStyle = { textDecoration: "line-through" }

  const completedItems = todos.filter((chore) => chore.isDone === true);
  useEffect(() => {
    setNewItem("");
  }, [todos]);
  return (
    <div className="container">
    <div className="list">
      {todos.map((chore, index) => (
        <div className="list-row" key={index}>
           <div className="todoContent"> <input
              type="checkbox"
              onChange={() => handleCheckbox(index)}
              checked={chore.isDone}
              className="checkbox"
            ></input>{" "}
            <h1 className="todoItem" style={chore.isDone ? itemCompletedStyle : null} >{chore.text}</h1></div>

            <MdDeleteForever className="bin" color="red" size={30} onClick={() => handleDelete(index)} />
        </div>
      ))}
         <Footer completedItems={completedItems} todos={todos} />
      <div className="button-row">
   
        <input
          type="input"
          placeholder="Add New Item"
          className="newItemInput"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        &nbsp;
        <button className="submitButton" onClick={() => handleSubmit(newItem)}>
          SUBMIT
        </button>
      </div>
     
    </div>
    </div>
  );
}