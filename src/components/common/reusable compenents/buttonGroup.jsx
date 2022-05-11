import React, { Component } from "react";
import DayButton from "../dayButton";
const ButtonGroup = () => {
  return (
    <div className="bg-secondary text-center">
      <div className="btn-group">
        <DayButton text="Today" where="today" />
        <DayButton text="Tomorrow" where="tomorrow" />
        <DayButton text="The Day After" where="day-after" />
      </div>
    </div>
  );
};

export default ButtonGroup;
