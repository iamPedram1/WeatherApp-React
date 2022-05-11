import React, { Component } from "react";
import DayButton from "./dayButton";
const ButtonGroup = () => {
  return (
    <div className="bg-secondary text-center">
      <div className="btn-group">
        <DayButton text="Today" />
        <DayButton text="Tommrow" />
        <DayButton text="Next Day" />
      </div>
    </div>
  );
};

export default ButtonGroup;
