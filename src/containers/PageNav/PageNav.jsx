import React from "react";
import "./PageNav.scss";
import Button from "../../components/Button/Button";

const PageNav = ({number, buttonClick}) => {

  return (
    <div className="page-nav">
        <Button className="page-nav__button--back" buttonClick={buttonClick} name="pageBack" icon="<" />
        <p className="page-nav__number" >Page {number}</p>
        <Button className="page-nav__button--forward" buttonClick={buttonClick} name="pageForward" icon=">" />
    </div>
  )
}

export default PageNav