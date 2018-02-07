import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  const filters = props.state.filters
  const items = props.state.items
  const selectedFilter = props.state.selectedFilter
  const handleFilterChange = props.handleFilterChange
  return (
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} />
      <FilteredFruitList
        selectedFilter={selectedFilter} items={filters}/>
    </div>
  );

}

export default FruitBasket;
