/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const LanguageSelector = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`language-selector property-1-7-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "default" && (
        <div className="div">
          <div className="text-wrapper">English</div>
          <img className="vector" alt="Vector" src="https://c.animaapp.com/LeesyeIf/img/vector-4@2x.png" />
        </div>
      )}

      {state.property1 === "variant-2" && (
        <>
          <div className="frame-2">
            <div className="text-wrapper">English</div>
            <img className="vector" alt="Vector" src="https://c.animaapp.com/LeesyeIf/img/vector-1@2x.png" />
          </div>
          <div className="frame-3">
            <div className="text-wrapper">Nepali</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

LanguageSelector.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
