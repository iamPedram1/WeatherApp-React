import React, { Component } from "react";

const DayButton = ({ text }) => {
  return (
    <button type="button" className="btn btn-primary m-2">
      {text}
    </button>
  );
};

export default DayButton;
