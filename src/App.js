import React, { Component } from "react";
import "./styles.css";
import Animal from "./Animal";
import AnimalForm from "./AnimalForm";
class App extends Component {
  state = {
    details: [
      {
        id: "1",
        name: "Tiger",
        number: 3891,
        endangered: true,
        photo: "https://source.unsplash.com/Si6Obte6Bu0/200x100",
        donation: 100
      },
      {
        id: "2",
        name: "Brown Bear",
        number: 200000,
        endangered: false,
        photo: "https://source.unsplash.com/c8XlAc1akIU/200x100",
        donation: 10
      },
      {
        id: "3",
        name: "Red Panda",
        number: 10000,
        endangered: true,
        photo: "https://source.unsplash.com/2zYHKx8jtvU/200x100",
        donation: 50
      }
    ]
  };

  removeList(id) {
    this.setState((prevState) => {
      const list = prevState.details.filter((item) => item.id !== id);
      return { ...prevState, details: list };
    });
  }

  addList(details) {
    this.setState((prevState) => {
      const newId = prevState.details.length + 1;
      const newDetails = { ...details, id: newId };
      return { ...prevState, details: [...prevState.details, newDetails] };
    });
  }

  render() {
    return (
      <>
        <Animal
          details={this.state.details}
          removeList={this.removeList.bind(this)}
        >
          <h1>Endangered Animals</h1>
        </Animal>
        <AnimalForm addList={this.addList.bind(this)} />
      </>
    );
  }
}

export default App;
