import React, { Component } from 'react';

const FilteredFruitList = (props)=> {
  const items = props.items
  const propFilter = props.filter
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {
    const list = !Filter || filter === 'all' ? items : items.filter(i => i.fruit_type === filter);

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
  }
}

export default FilteredFruitList;
