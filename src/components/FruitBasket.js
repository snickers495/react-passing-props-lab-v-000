import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  const filters = props.filters
  const items = props.fruit
  const selectedFilter = props.currentFilter
  const handleFilterChange = props.handleFilterChange
  return (
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} filters={filters} filter={selectedFilter}/>
      <FilteredFruitList
        selectedFilter={selectedFilter} items={items}/>
    </div>
  );

}

export default FruitBasket;
FruitBasket.defaultProps = {
  filters: [],
  currentFilter: "",
  updateFilterCallback: function(){},
  fruit: []
}
