import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit }));
  }
  componentWillMount(){
    this.fetchFilters
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    return(
      <FruitBasket handleFilterChange={this.handleFilterChange} fetchFilters={this.fetchFilters}
        state={this.state}/>
    )
  }
}
