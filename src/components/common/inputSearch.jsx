import React, { Component } from "react";

const InputSearch = ({ stateCityName, onChanges }) => {
  return (
    <div className="input-group container search">
      <input
        type="text"
        value={stateCityName}
        onChange={onChanges}
        className="form-control"
        placeholder="Enter The City Name"
      />
      <div className="input-group-append">
        <button className="btn btn-danger">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
