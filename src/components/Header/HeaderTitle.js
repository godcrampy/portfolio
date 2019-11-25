import React from "react";
import { Link } from "gatsby";

import rocketImage from "../../assets/rocket.png";

export default props => {
  return (
    <div className="header-brand left">
      <Link to="/" className="nav-item no-hover">
        <img alt="rocket" src={rocketImage} />
        <h4 className="title uppercase">{props.title}</h4>
      </Link>
      {props.children}
    </div>
  );
};
