// import React from 'react'
// import { useState } from 'react';

// const ClickIncrease=()=> {
//     const [count, setCount] = useState(0); 
//     return (
//       <div>   
//         <button onClick={() => setCount((count) => count + 1)}>Increment</button>
//         <p>Clicked: {count} times</p> 
//       </div>
//     )
// }

// export default ClickIncrease


import React from 'react'
import withCounter from './WithCounter'
const ClickCounter = ({count, incrementCount}) => {
  return (
    <button onClick ={incrementCount}>
      Clicked {count} times
    </button>
  )
}
export default withCounter(ClickCounter)