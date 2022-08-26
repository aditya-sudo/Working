import React, { useState } from "react";
import LogIn from "./LogIn";
function FunctionClick() {
  //   function clickHandler() {
  //     console.log("click me");
  //   }
  const [islogged, setloggedin] = useState(false);
  return (
    <>
      {islogged ? (
        <LogIn />
      ) : (
        <button onClick={() => setloggedin(true)}>Log in</button>
      )}
    </>
  );
}

export default FunctionClick;
