import "./App.css";
import React from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}
 
export default App;
