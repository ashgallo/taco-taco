import React, { Component, createContext } from 'react';
import axios from 'axios';

const url = "http://taco-randomizer.herokuapp.com/condiments/";

const CondimentContext = createContext();

export default class CondimentProvider extends Component {
  constructor() {
    super();
    this.state = {
      condiments: [],
      currentCondiment: undefined,
      loading: true,
      err: null
    }
    this.handleSelection = this.handleSelection.bind(this);
  }

  _getCondimentData = () => {
    return axios.get(url).then(response => response.data)
  }

  handleSelection(index) {
    return ({ target }) => {
      this.setState({ currentCondiment: target.value })
    }
  }

  componentDidMount() {
    this._getCondimentData()
    .then(condiments => {
      this.setState({
        condiments,
        currentCondiment: 0,
        loading: false,
        err: null
      })
    })
  }

  render() {
    return (
      <CondimentContext.Provider
        value={{ ...this.state, handleSelection: this.handleSelection }}>
        {this.props.children}
      </CondimentContext.Provider>
    )
  }
}

export const withCondiment = C => props => (
  <CondimentContext.Consumer>
    {value => <C {...props} {...value} />}
  </CondimentContext.Consumer>
)
