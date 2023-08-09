import React from "react";
import "./Overlay.css";
import Spinner from "../SpinDaBlock/Spinner";

function Overlay({ children, isLoading }) {
  return (
    <>
      {isLoading && <Spinner />}
      {children}
    </>
  );
}

export default Overlay;
