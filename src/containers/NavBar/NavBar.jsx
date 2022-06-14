import React from 'react';
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../containers/FiltersList/FiltersList";

const NavBar = ({handleFilter, title}) => {

  return (
    <div className="nav-bar">
      <SearchBox />
      <FilterList handleFilter={handleFilter}/>
    </div>
  )
}

export default NavBar