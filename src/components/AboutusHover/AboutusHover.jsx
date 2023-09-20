/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { HomeDefault } from "../HomeDefault";
import "./style.css";

export const AboutusHover = ({ property1, className, homeDefaultDivClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`aboutus-hover property-1-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <HomeDefault
        className="instance-node"
        divClassName={
          state.property1 === "default"
            ? homeDefaultDivClassName
            : {
                color: "#fd0418",
                marginLeft: "-11.50px",
                marginRight: "-11.50px",
              }
        }
        text="About Us"
      />
      {state.property1 === "variant-2" && (
        <img className="img" alt="Line" src="https://c.animaapp.com/LeesyeIf/img/line-22-7@2x.png" />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
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

AboutusHover.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
