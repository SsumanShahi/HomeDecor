/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { LanguageSelector } from "../LanguageSelector";
import "./style.css";

export const Search = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`search property-1-8-${state.property1} ${className}`}>
      {state.property1 === "default" && (
        <img className="group-2" alt="Group" src="https://c.animaapp.com/LeesyeIf/img/group-167-1@2x.png" />
      )}

      {state.property1 === "variant-2" && (
        <div
          className="frame-4"
          onClick={() => {
            dispatch("click");
          }}
        >
          <img className="mdi-search" alt="Mdi search" src="https://c.animaapp.com/LeesyeIf/img/mdi-search@2x.png" />
          <div className="text-wrapper-2">Search</div>
          <img className="group-3" alt="Group" src="https://c.animaapp.com/LeesyeIf/img/group-168@2x.png" />
        </div>
      )}

      <LanguageSelector className={`${state.property1 === "variant-2" ? "class" : "class-2"}`} property1="default" />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Search.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
