import React, { Component } from "react";
import Gigolos from "./Gigolos";

class Form extends Component {
  render() {
    // Create a function on submit that reads the form fields and is performing a fetch post request to a post route on the server
    return (
      <div>
        <form className="mt-5">
          <Gigolos gigolos={this.props.gigolos} />
          <div className="row">
            <div className="col">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your first name"
                id="firstname"
              />
            </div>
            <div className="col">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your last name"
                id="lastname"
              />
            </div>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Order
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
