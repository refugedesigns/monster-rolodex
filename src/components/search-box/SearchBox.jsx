import React from "react";
import "./search-box.styles.css"

const SearchBox = (props) => {
  const { handleChange, type, placeholder } = props;
  return <input className="search" onChange={handleChange} type={type} placeholder={placeholder} />;
};

export default SearchBox;
