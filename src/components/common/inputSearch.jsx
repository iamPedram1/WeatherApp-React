import React from "react";
import PropTypes from "prop-types";

const InputSearch = ({ stateCityName, onChanges, onGettingData }) => {
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
        <button
          disabled={stateCityName.length === 0 ? true : false}
          onClick={onGettingData}
          className="btn btn-danger"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

InputSearch.propTypes = {
  stateCityName: PropTypes.string.isRequired,
  onChanges: PropTypes.func.isRequired,
  onGettingData: PropTypes.func.isRequired,
};

export default InputSearch;
