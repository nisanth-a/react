// import React from 'react'
// import { useState } from 'react';

// const HoverIncrease=()=> {
//     const [count, setCount] = useState(0); 
//     return (
//       <div>   
//         <button onMouseOver={() => setCount((count) => count + 1)}>Increment</button>
//         <p>Hovered {count} times</p> 
//       </div>
//     )
// }

// export default HoverIncrease;




import React from 'react'
import withCounter from './WithCounter'
const HoverCounter = ({count, incrementCount}) => {
return (
    <button onMouseOver ={incrementCount}>
      Hovered {count} times
    </button>
  )
}
export default withCounter(HoverCounter)