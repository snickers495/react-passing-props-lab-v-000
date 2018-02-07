import React, { Component } from 'react';

const Filter = (props) => {
  const filters = props.filter;
  const handleChange = props.handleChange


    return (
      <select onChange={props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.state.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );

}

export default Filter;
