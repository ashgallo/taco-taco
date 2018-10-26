import React, { Component, createContext } from 'react';
import axios from 'axios';

const url = "http://taco-randomizer.herokuapp.com/mixins/";

const MixinContext = createContext();

export default class MixinProvider extends Component {
  constructor() {
    super();
    this.state = {
      mixins: [],
      currentMixin: undefined,
      loading: true,
      err: null
    }
    this.handleSelection = this.handleSelection.bind(this);
  }

  _getMixinData = () => {
    return axios.get(url).then(response => response.data)
  }

  handleSelection(index) {
    return({ target }) => {
      this.setState({ currentMixin: target.value })
    }
  }

  componentDidMount() {
    this._getMixinData()
    .then(mixins => {
      this.setState({
        mixins,
        currentMixin: 0, 
        loading: false,
        err: null
      })
    })
  }

  render() {
    return (
      <MixinContext.Provider
        value={{ ...this.state, handleSelection: this.handleSelection }}>
        {this.props.children}
      </MixinContext.Provider>
    )
  }
}

export const withMixin = C => props => (
  <MixinContext.Consumer>
    {value => <C {...props} {...value} />}
  </MixinContext.Consumer>
)