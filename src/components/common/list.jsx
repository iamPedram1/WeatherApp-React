import React, { Component } from "react";

const List = ({ text, listData }) => {
  return <li className="list-group-item"> {`${text}: ${listData} `}</li>;
};

export default List;
