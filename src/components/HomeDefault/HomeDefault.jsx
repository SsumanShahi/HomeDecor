/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeDefault = ({ className, divClassName, text = "Home" }) => {
  return (
    <div className={`home-default ${className}`}>
      <div className="frame">
        <div className={`home ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

HomeDefault.propTypes = {
  text: PropTypes.string,
};
