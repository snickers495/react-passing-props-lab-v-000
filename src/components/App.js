import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      filters: [],
      items: []
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render(){
    return(
      <FruitBasket />;
    )
  }
}
