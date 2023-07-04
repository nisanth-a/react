import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

function UseContext() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h3>useContext Hook</h3>
      <p>Avoids prop drilling and props can be passed directly</p>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default UseContext;
