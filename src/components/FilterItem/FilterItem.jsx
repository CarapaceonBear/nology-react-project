import React from 'react';
import "./FilterItem.scss";

const FilterItem = ({label, id, onClick}) => {

  return (
    <div className="filter-item">
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} value={id} onClick={onClick} />
    </div>
  )
}

export default FilterItem