import React, { useState, useEffect, useContext } from 'react';

// Example Context
const ThemeContext = React.createContext();

// Example Component
function ExampleComponent() {
  // useState example
  const [count, setCount] = useState(0);

  // useEffect example
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useContext example
  const theme = useContext(ThemeContext);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className='ui button' onClick={increment}>Increment</button>
      <p>Theme: {theme}</p>
    </div>
  );
}

// Example App using Context Provider
function BasicHooks() {
  return (
    <ThemeContext.Provider value="dark">
      <ExampleComponent />
    </ThemeContext.Provider>
  );
}

export default BasicHooks;