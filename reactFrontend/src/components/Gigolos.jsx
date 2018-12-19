import React, { Component } from "react";
import Profile from "./Profile";

class Gigolos extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="guys d-flex mb-5">
        {this.props.gigolos &&
          this.props.gigolos.map((gigolo, id) => (
            <Profile gigolo={gigolo} key={id} />
          ))}
      </div>
    );
  }
}

export default Gigolos;
