import React, { Component, createContext } from 'react';
import axios from 'axios';

const url = "http://taco-randomizer.herokuapp.com/seasonings/";

const SeasoningContext = createContext();

export default class SeasoningProvider extends Component {
  constructor() {
    super();
    this.state = {
      seasonings: [],
      currentSeasoning: undefined,
      loading: true,
      err: null
    }
    this.handleSelection = this.handleSelection.bind(this)
  }

  _getSeasoningData = () => {
    return axios.get(url).then(response => response.data)
  }

  handleSelection(index) {
    return ({ target }) => {
      this.setState({ currentSeasoning: target.value })
    }
  }

  componentDidMount() {
    this._getSeasoningData()
    .then(seasonings => {
      this.setState({
        seasonings,
        currentSeasoning: 0,
        loading: false,
        err: null
      })
    })
  }

  render() {
    return (
        <SeasoningContext.Provider
          value={{ ...this.state, handleSelection: this.handleSelection }}>
          {this.props.children}
        </SeasoningContext.Provider>
    )
  }
}

export const withSeasoning = C => props => (
  <SeasoningContext.Consumer>
    {value => <C {...props} {...value} />}
  </SeasoningContext.Consumer>
)
