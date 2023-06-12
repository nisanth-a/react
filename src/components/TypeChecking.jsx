import PropTypes from 'prop-types';
import React from 'react';

const TypeCheck = ({name, age, onClick})=>{
    const handleClick=()=>{
        onClick(name);
    }
  return (
    <div className="App">
      <h1>Name:{name}</h1>
      <p>Age:{age}</p>
      <button onClick={handleClick}>Click Here</button>
    </div>    
  );
}
TypeCheck.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  onClick:PropTypes.func,
};

export default TypeCheck;