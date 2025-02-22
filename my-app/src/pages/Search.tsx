import React, { useState } from "react";
import {FaSearch} from "react-icons/fa";
import "./Search.css";

const Search = () => {
  return (
    <div className = "input-wrapper">
        <FaSearch id="search-icon"/>
        <input placeholder="Search here"/>

    </div>
  )
};


export default  Search;