import React, { Component } from "react";

class AnimalForm extends Component {
  state = {
    name: "",
    number: 0,
    endangered: false,
    photo: "",
    donation: 0
  };

  getInputValue(target) {
    if (target.type === "radio" && target.value === "yes") {
      return true;
    } else if (target.type === "radio" && target.value === "no") {
      return false;
    }
    return target.value;
  }

  handleChange = (event) => {
    const inputTarget = event.target;
    const inputValue = this.getInputValue(inputTarget);
    const inputName = inputTarget.name;
    this.setState({ [inputName]: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addList(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new animal details</h2>
        <label>
          <div className="title">Name:</div>{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className="title">Number:</div>{" "}
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <div className="title">Endangered:</div>
          <label>
            <input
              type="radio"
              name="endangered"
              value={this.state.endangered}
              onChange={this.handleChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="endangered"
              value={!this.state.endangered}
              onChange={this.handleChange}
            />{" "}
            No
          </label>
        </div>
        <label>
          <div className="title">Photo:</div>{" "}
          <input
            type="text"
            name="photo"
            value={this.state.photo}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className="title">Donation:</div> $
          <input
            type="number"
            name="donation"
            value={this.state.donation}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button>Add to the list</button>
        </div>
      </form>
    );
  }
}

export default AnimalForm;
