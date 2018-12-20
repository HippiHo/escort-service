import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gigolos: [],
      input: {}
    };
  }

  componentWillMount = () => {
    fetch("http://localhost:5000/users")
      .then(resp => resp.json())
      .then(response => {
        this.setState({ gigolos: response });
        console.log(response);
      });
  };

  // getInput = e => {
  //   console.log(e.target.value);
  //   //this.setState({ input:  });
  // };

  // 1. Write response into state
  // 2. Pass this state to form
  // 3. Loop in the form over the callboy
  // 4.

  render() {
    return (
      <div className="container">
        <Header />
        <Form gigolos={this.state.gigolos} />
      </div>
    );
  }
}

export default App;
