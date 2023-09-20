/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Group = ({
  property1,
  className,
  epsonXgaClassName,
  hasProduct = true,
  NRPClassName,
  productClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`group property-1-9-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "default" && (
        <>
          <div className={`NRP ${NRPClassName}`}>Nrp 64,000.00</div>
          <div className={`epson-XGA ${epsonXgaClassName}`}>
            Epson E8-e01 Xga 3lcd
            <br />
            projector
          </div>
          <>
            {hasProduct && (
              <img
                className={`product ${productClassName}`}
                alt="Product"
                src="https://c.animaapp.com/LeesyeIf/img/product-2-2@2x.png"
              />
            )}
          </>
        </>
      )}

      {state.property1 === "cardviewbox" && (
        <div className="overlap-group">
          <div className="NRP-2">Nrp 64,000.00</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/LeesyeIf/img/rectangle-69@2x.png" />
          <div className="epson-e-e-XGA">
            Epson E8-e01 Xga 3lcd
            <br />
            projector
          </div>
          <img className="product-2" alt="Product" src="https://c.animaapp.com/LeesyeIf/img/product-2-2@2x.png" />
          <div className="group-wrapper">
            <img className="img-2" alt="Group" src="https://c.animaapp.com/LeesyeIf/img/group-176@2x.png" />
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "cardviewbox",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Group.propTypes = {
  property1: PropTypes.oneOf(["cardviewbox", "default"]),
  hasProduct: PropTypes.bool,
};
