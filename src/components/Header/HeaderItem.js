import React from "react";
import { Link } from "gatsby";

export default props => {
  return (
    <div className="nav-item hide right item">
      <Link to={props.link}>{props.title}</Link>
    </div>
  );
};
