import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  const filters = props.state.filters
  const selectedFilter = props.selectedFilter
  const handleFilterChange = props.handleFilterChange
  return (
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} />
      <FilteredFruitList
        filter={selectedFilter} filters={filters}/>
    </div>
  );

}

export default FruitBasket;
