import React from "react";
import "./Button";

const Button = ({buttonClick, name, icon}) => {
  return (
    <button className="button" value={name} onClick={buttonClick}>{icon}</button>
  )
}

export default Button