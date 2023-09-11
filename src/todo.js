import React, { useState, useEffect } from 'react';

function TodoApp() {
  // State hook ka istemal user input ke liye karein
  const [inputValue, setInputValue] = useState('');
  // State hook ka istemal todo list ke liye karein
  const [todos, setTodos] = useState([]);

  // useEffect hook ka istemal karein user input ki value change hone par
  useEffect(() => {
    // alert("Todo aDd")
    // Kuch action user input ke hisab se perform karein, jaise ki API call ya local storage update
  }, [inputValue]);

  // Todo item ko list mein add karne ke liye ek function
  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter a todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Submit</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;