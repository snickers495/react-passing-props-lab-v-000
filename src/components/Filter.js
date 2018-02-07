import React, { Component } from 'react';

const Filter = (props) => {
  const filter = props.filter;
  const handleChange = props.handleChange
  const filters = props.filters


    return (
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );

}

export default Filter;
Filter.defaultProps = {
  filters: [],
  handleChange: function(){}
}
