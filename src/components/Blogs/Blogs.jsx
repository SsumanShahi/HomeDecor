/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { HomeDefault } from "../HomeDefault";
import "./style.css";

export const Blogs = ({ property1, className, homeDefaultDivClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`blogs property-1-6-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <HomeDefault
        className="home-default-8"
        divClassName={
          state.property1 === "default"
            ? homeDefaultDivClassName
            : {
                color: "#fd0418",
              }
        }
        text="Blogs"
      />
      {state.property1 === "variant-2" && (
        <img className="line-8" alt="Line" src="https://c.animaapp.com/LeesyeIf/img/line-22-9@2x.png" />
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

Blogs.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
