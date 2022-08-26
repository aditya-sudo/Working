import React, { Component } from "react";
import FunctionClick from "./FunctionClick";

export class Greet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentname: "parent",
      isLoggedin: true,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(childname) {
    alert(`Hello ${this.state.parentname} from ${childname}`);
  }

  render() {
    return this.state.isLoggedin ? (
      <FunctionClick greetHandler={this.clickHandler} />
    ) : (
      <div>No greetings</div>
    );
  }
}

export default Greet;
