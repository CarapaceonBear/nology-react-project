import React from 'react';
import "./FiltersList.scss";
import FilterItem from "../../components/FilterItem/FilterItem";

const FiltersList = ({handleFilter}) => {

  return (
    <div className="filters-list">
      <FilterItem label="High ABV (> 6.0%)" id="high-abv" onClick={handleFilter} />
      <FilterItem label="Classic Range" id="classic" onClick={handleFilter} />
      <FilterItem label="Acidic {ph < 4)" id="acidic" onClick={handleFilter} />
    </div>
  )
}

export default FiltersList