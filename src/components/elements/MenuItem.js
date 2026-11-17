import React from "react";

function MenuItem(props) {
  return (
    <a href={props.href} onClick={props.onClick} className="navbar-item is-unselectable">
      {props.text}
    </a>
  );
}

export default MenuItem;
