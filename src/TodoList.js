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
  function handlePriority(index) {
    const newTodos = [...todos]
    newTodos[index].priority = !newTodos[index].priority
    setTodos(newTodos)
  }
  const itemCompletedStyle = {textDecoration: "line-through"}  
  const itemPriority = {backgroundColor: "orange"}
  const completedItems = todos.filter((chore) => chore.isDone === true);  
  useEffect(() => {  
    setNewItem("");  
  }, [todos]);  
  return (
    <div className="list">
      {todos.map((chore, index) => (  
        <div className="list-row"  key={index}>
          <div className="row-left" style={chore.priority ? itemPriority : null}>
            <MdDeleteForever color="red" size={30} onClick={() => handleDelete(index)} />
            <input
              type="checkbox"
              onChange={() => handleCheckbox(index)}
              checked={chore.isDone}
              className="checkbox"
            ></input>{" "}
            <h1 style={chore.isDone ? itemCompletedStyle : null} >{chore.text}</h1>
            
        
          </div>
          <div className="priorityDiv">Urgent<input type="checkbox"
            onChange={() => handlePriority(index)}
            checked={chore.priority}
            className="checkbox2"></input></div>
        </div>
      ))}
      <h2>
        <input
          type="input"
          placeholder="Add New Item"
          className="newItemInput"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        &nbsp;
        <button className="newItemInput" className="submitButton" onClick={() => handleSubmit(newItem)}>
          Submit
        </button>
      </h2>
      <Footer completedItems={completedItems} todos={todos} />
    </div>
  );
}