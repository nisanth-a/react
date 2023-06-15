import React, { createContext, useContext } from 'react';

// Step 1: Create a Context
const MyContext = createContext();

// Step 2: Create a Component that Provides the Context
const ParentComponent = () => {
    const sharedData = 'Hello, I am shared data!';

    return (
        <MyContext.Provider value={sharedData}>
            <ChildComponent1 />
            <ChildComponent2 />
        </MyContext.Provider>
    );
};

// Step 3a: Create a Child Component that Consumes the Context using Consumer Component
const ChildComponent1 = () => {
    return (
        <div>
            <h2>Child Componen-1</h2>
            <MyContext.Consumer>
                {value => <p>{value}</p>}
            </MyContext.Consumer><hr></hr>
            <AnotherChildComponent />
        </div>
    );
};
const ChildComponent2 = () => {
    return (
        <div>
            <h2>Child Component-2</h2>
            <MyContext.Consumer>
                {value => <p>{value}</p>}
            </MyContext.Consumer><hr></hr>
        </div>
    );
};


// Step 3b: Create a Child Component that Consumes the Context using useContext Hook (Functional Components)
    const AnotherChildComponent = () => {
        const value = useContext(MyContext);

        return (
            <div>
                <h2>Another Child Component</h2>
                <p>{value}</p>
            </div>
        );
    };

export default ParentComponent;