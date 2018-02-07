import React, { Component } from 'react';

const Filter = (props) => {
  const filter = props.filter;


    return (
      <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.state.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );

}

export default Filter;
