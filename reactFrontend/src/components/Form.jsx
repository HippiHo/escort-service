import React, { Component } from "react";

class Form extends Component {
  firstName = React.createRef();
  lastName = React.createRef();
  eMail = React.createRef();
  man = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    let object = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      eMail: this.eMail.current.value,
      [this.man.current.value]: this.man.current.checked
    };

    // let input = `{${this.firstName.current.id}: ${this.firstName.current.value},
    //   ${this.lastName.current.id}: ${this.lastName.current.value},
    //   ${this.eMail.current.id}: ${this.eMail.current.value},

    // }`;
    // console.log(input);

    fetch("http://localhost:5000/contact", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(object), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", response))
      .catch(error => console.error("Error:", error));
  };

  render() {
    // Create a function on submit that reads the form fields and is performing a fetch post request to a post route on the server
    return (
      <div>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          {this.props.gigolos &&
            this.props.gigolos.map((gigolo, id) => (
              <div className="profile mr-5">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={gigolo.name}
                    ref={this.man}
                    value={gigolo.name}
                    //            onChange={this.props.getInput}
                  />
                  <label
                    className="form-check-label name"
                    htmlFor={gigolo.name}
                  >
                    {gigolo.name}
                  </label>
                </div>
                <img src={gigolo.image} width="100%" alt="man" />
                <p>Age: {gigolo.age}</p>
                <p>Height: {gigolo.height} cm</p>
              </div>
            ))}
          <div className="row">
            <div className="col">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your first name"
                id="firstname"
                //                onChange={this.props.getInput}
                ref={this.firstName}
              />
            </div>
            <div className="col">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your last name"
                id="lastname"
                //                onChange={this.props.getInput}
                ref={this.lastName}
              />
            </div>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              //              onChange={this.props.getInput}
              ref={this.eMail}
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
