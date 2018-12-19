import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile mr-5">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label name" htmlFor="exampleCheck1">
            {this.props.gigolo.name}
          </label>
        </div>
        <img src={this.props.gigolo.image} width="100%" alt="man" />
        <p>Age: {this.props.gigolo.age}</p>
        <p>Height: {this.props.gigolo.height} cm</p>
      </div>
    );
  }
}

export default Profile;
