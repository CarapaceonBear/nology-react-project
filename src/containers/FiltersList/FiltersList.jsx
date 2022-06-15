import React from 'react';
import "./FiltersList.scss";
import FilterItem from "../../components/FilterItem/FilterItem";

const FiltersList = ({handleFilter}) => {

  return (
    <div className="filters-list">
      <FilterItem className="filters-list__item" label="High ABV (> 6.0%)" id="high-abv" onClick={handleFilter} />
      <FilterItem className="filters-list__item" label="Classic Range" id="classic" onClick={handleFilter} />
      <FilterItem className="filters-list__item" label="Acidic (ph < 4)" id="acidic" onClick={handleFilter} />
    </div>
  )
}

export default FiltersList