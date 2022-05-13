import React, { Component } from "react";
import PropTypes from "prop-types";

const List = ({ text, listData }) => {
  console.log(typeof text, typeof listData);
  return <li className="list-group-item"> {`${text}: ${listData} `}</li>;
};

List.propTypes = {
  text: PropTypes.string.isRequired,
  listData: PropTypes.number.isRequired,
};

export default List;
