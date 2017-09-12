import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomBeerName: "Gonna be tasty!",
      randomBeeerDescription: "Gonna sound tasty!",
      randomJoke: "Delicious"
    };

    this.runAxios = this.runAxios.bind(this);
    this.tacoFinder = this.tacoFinder.bind(this);
  }

  runAxios() {
    axios
    .get("https://api.punkapi.com/v2/beers/random")
    .then(response => {
      this.setState({randomBeerName: response.data[0].name,
                     randomBeeerDescription: response.data[0].description,
                     clicked: true });
      console.log(response);
  });
  }

  tacoFinder() {
    axios
    .get("http://api.icndb.com/jokes/random")
    .then(response => {
      this.setState({randomJoke: response.data.value.joke});
      console.log("Taco Data:", response);
  });
  }

  render() {
    return (
      <div className="App">
        <p>{`Beer Name: ${this.state.randomBeerName}`}</p>
        <p>{`Beer Description: ${this.state.randomBeeerDescription}`}</p>
        <button onClick={ () => this.runAxios() }>Random Beer</button>
        <p>{`Random Joke: ${this.state.randomJoke}`}</p>
        <button onClick={ () => this.tacoFinder() }>Random Joke</button>
      </div>
    );
  }
}

export default App;
