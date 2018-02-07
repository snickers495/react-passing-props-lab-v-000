import React, { Component } from 'react';

const FilteredFruitList = (props)=> {
  const items = props.items
  const propFilter = props.selectedFilterfilter
  const list = !propFilter || propFilter === 'all' ? items : items.filter(i => i.fruit_type === propFilter);

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
}

export default FilteredFruitList;
