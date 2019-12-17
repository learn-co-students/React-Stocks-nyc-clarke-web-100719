import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input name="sort" type="radio" value="Alphabetically" checked={props.sort} onChange={props.handleChange}/>
        Alphabetically
      </label>
      <label>
        <input name="sort" type="radio" value="Price" checked={props.sort} onChange={props.handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select name='filter' onChange={props.handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
