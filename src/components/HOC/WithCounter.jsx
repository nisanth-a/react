import React, { useState } from 'react'

const withCounter = (WrappedComponent) => {
    const EnhancedComponent = () => {
        const [count, increamentCount] = useState(0)
        const incrementCount = () => increamentCount(count => count + 1)
        return (
            <WrappedComponent
                incrementCount={incrementCount}
                count={count}
            />
        )
    }
    return EnhancedComponent
}
export default withCounter