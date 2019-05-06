import React from "react";

const Loader = props => {
  if (props.show) {
    return (
      <div className="loading">
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
      </div>
    );
  }
  return "";
};

export default Loader;
