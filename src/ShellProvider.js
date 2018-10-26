import React, { Component, createContext } from 'react';
import axios from 'axios';

const url = "http://taco-randomizer.herokuapp.com/shells/";

const ShellContext = createContext();

export default class ShellProvider extends Component {
  constructor() {
    super();
    this.state = {
      shells: [],
      currentShell: undefined,
      loading: true,
      err: null
    }
    this.handleSelection = this.handleSelection.bind(this);
  }

  _getShellData = () => {
    return axios.get(url).then(response => response.data)
  }

  handleSelection(index) {
    return ({ target }) => {
      this.setState({ currentShell: target.value })
    }
  }

  componentDidMount() {
    this._getShellData()
    .then(shells => {
      this.setState({
        shells,
        currentShell: 0,
        loading: false,
        err: null
      })
    })
  }

  render() {
    return (
      <ShellContext.Provider
        value={{ ...this.state, handleSelection: this.handleSelection }}>
        {this.props.children}
      </ShellContext.Provider>
    )
  }
}

export const withShell = C => props => (
  <ShellContext.Consumer>
    {value => <C {...props} {...value} />}
  </ShellContext.Consumer>
)

