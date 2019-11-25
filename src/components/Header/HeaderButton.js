import React from "react";

export default props => {
  return (
    <div onClick={props.toggle} className="nav-item nav-btn active left">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
