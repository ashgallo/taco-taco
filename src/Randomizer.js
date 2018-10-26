import React, { Component, createContext } from 'react';
import axios from 'axios';

const url = "http://taco-randomizer.herokuapp.com/random/"

const RandomizerContext = createContext();

export default class Randomizer extends Component {
  constructor() {  
    super();
    this.state = {
      random: undefined,
      loading: true,
      err: null
    }
    this.handleTacoData = this.handleTacoData.bind(this);
  }

  _getTacoData = () => {
    return axios.get(url).then(response => response.data)
  }

  handleTacoData() {
    return this._getTacoData(url)
    .then(random => this.setState( {
      random,
      loading: false,
      err: null
    }))
  }

  componentDidMount() {
    this.handleTacoData()
  }

  render() {
    return (
      <div>
        <RandomizerContext.Provider
          value={{ ...this.state}}>
          {this.props.children} 
        </RandomizerContext.Provider>
      </div>
    )
  }
}

export const withRandomizer = C => props => (
  <RandomizerContext.Consumer>
    {value => <C {...props} {...value} />}
  </RandomizerContext.Consumer>
)