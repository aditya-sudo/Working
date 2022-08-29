import React from "react";

function Form({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    setInputText("");
  };
  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={(e) => inputTextHandler(e)}
          type="text"
          className="todo-input"
        />
        <button
          onClick={(e) => submitTodoHandler(e)}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
