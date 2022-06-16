import React from 'react';
import "./SearchBox.scss";

const SearchBox = ({onChange}) => {
  return (
    <div className="search-box">
      <label className="search-box__label" htmlFor="search-box-input">Search</label>
      <input className="search-box__input" id="search-box-input" type="text" onChange={onChange} />
    </div>
  )
}

export default SearchBox