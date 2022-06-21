import React from 'react';
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../containers/FiltersList/FiltersList";

const NavBar = ({handleFilter, handleSearch}) => {

  return (
    <div className="nav-bar">
      <SearchBox className="nav-bar__search" onChange={handleSearch} />
      <FilterList className="nav-bar__filter" handleFilter={handleFilter}/>
    </div>
  )
}

export default NavBar