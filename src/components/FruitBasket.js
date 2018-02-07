import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  const filters = props.filters
  const selectedFilter = props.selectedFilter
  const handleFilterChange = props.handleFilterChange


  render() {
    return (
      <div className="fruit-basket">
        <Filter handleChange={this.handleFilterChange} />
        <FilteredFruitList
          filter={this.state.selectedFilter} />
      </div>
    );
  }
}

export default FruitBasket;
