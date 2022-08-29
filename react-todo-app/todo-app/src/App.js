import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header> Aditya's Todo-List </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setinputText}
        inputText={inputText}
      />
      <TodoList inputText={inputText} />
    </div>
  );
}

export default App;
