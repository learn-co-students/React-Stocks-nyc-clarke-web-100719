import React from 'react';

const SearchBar = (props) => {


  // use abstract handleChange/changeState methods to abstract away the state change

  const handleChange = (e) => {
    props.changeState(e.target.name, e.target.value)
  }

  // const handleRadioChange = (e) => {
  //   props.changeSortBy(e.target.value)
  // } 

  // const handleSelectChange = (e) => {
  //   props.changeFilter(e.target.value)
  // }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sortBy" value="" checked={props.sortBy === ""} onChange={handleChange}/>
        None
      </label>
      <label>
        <input type="radio" name="sortBy" value="Alphabetically" checked={props.sortBy === "Alphabetically"} onChange={handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sortBy" value="Price" checked={props.sortBy === "Price"} onChange={handleChange}/>
        Price
      </label>
      <br/>
      <label>
        <strong>Filter:</strong>
        <select name="filter" value={props.filter} onChange={handleChange}>
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
