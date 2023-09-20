/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Carasoul = ({ property1, className, sofaRemovebgClassName, eeeRemovebgClassName, couchClassName }) => {
  return (
    <div className={`carasoul ${property1} ${className}`}>
      <img
        className="chair-removebg"
        alt="Chair removebg"
        src={
          property1 === "slider-component2"
            ? "https://c.animaapp.com/LeesyeIf/img/sofa-removebg-preview-7-3.png"
            : property1 === "slider-component3"
            ? "https://c.animaapp.com/LeesyeIf/img/eee-300x300-removebg-preview-3.png"
            : property1 === "slider-component4"
            ? "https://c.animaapp.com/LeesyeIf/img/couch-3.png"
            : "https://c.animaapp.com/LeesyeIf/img/chair-removebg-preview-1-6.png"
        }
      />
      <img
        className={`sofa-removebg ${sofaRemovebgClassName}`}
        alt="Sofa removebg"
        src="https://c.animaapp.com/LeesyeIf/img/sofa-removebg-preview-7-4.png"
      />
      <img
        className={`eee-removebg ${eeeRemovebgClassName}`}
        alt="Eee removebg"
        src="https://c.animaapp.com/LeesyeIf/img/sofa-removebg-preview-7-4.png"
      />
      <img
        className={`couch ${couchClassName}`}
        alt="Couch"
        src="https://c.animaapp.com/LeesyeIf/img/sofa-removebg-preview-7-4.png"
      />
    </div>
  );
};

Carasoul.propTypes = {
  property1: PropTypes.oneOf(["slider-component3", "slider-component4", "slider-component1", "slider-component2"]),
};
