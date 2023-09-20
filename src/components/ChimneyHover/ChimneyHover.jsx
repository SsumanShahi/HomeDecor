/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { HomeDefault } from "../HomeDefault";
import "./style.css";

export const ChimneyHover = ({ property1, className, homeDefaultDivClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`chimney-hover property-1-3-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <HomeDefault
        className="home-default-5"
        divClassName={
          state.property1 === "default"
            ? homeDefaultDivClassName
            : {
                color: "#fd0418",
                marginLeft: "-10.50px",
                marginRight: "-10.50px",
              }
        }
        text="Chimney"
      />
      {state.property1 === "variant-2" && (
        <img className="line-5" alt="Line" src="https://c.animaapp.com/LeesyeIf/img/line-22-7@2x.png" />
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

ChimneyHover.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
