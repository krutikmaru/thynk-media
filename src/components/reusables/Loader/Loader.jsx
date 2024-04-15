import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
        <div className="spinner-line"></div>
      </div>
    </div>
  );
};

export default Loader;
