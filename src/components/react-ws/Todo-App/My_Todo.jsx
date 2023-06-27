import React, { useState, useEffect } from "react";
// import "../My_Todo.css"
import "./My_Todo.css";
const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addItem = () => {
    if (text.trim() !== "") {
      setItems([...items, text]);
      setText("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="My_Todo">
      <h1 className="todo-title">Todo App</h1>
      <input
        className="input-text"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button className="button" onClick={addItem}>
        Add
      </button>

      {items.map((item, index) => (
        <li id="list-items" key={index}>
          {item}
          <button className="buttonn" onClick={() => deleteItem(index)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoApp;
