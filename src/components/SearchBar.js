import React from 'react';

const SearchBar = (props) => {
  // console.log(props)
  return (
    <div>
    
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.currentSort === 'Alphabetically'? true : false} onChange={(e) => props.handleSort(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.currentSort === 'Price'? true : false} onChange={(e) => props.handleSort(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.handleFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
