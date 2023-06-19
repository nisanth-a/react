import PropTypes from "prop-types";
import React from "react";

const TypeCheck = ({ name, age }) => {

  return (
    <div className="App">
      <h1>Name:{name}</h1>
      <p>Age:{age}</p>

    </div>    
  );
}
TypeCheck.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  
};


export default TypeCheck;
