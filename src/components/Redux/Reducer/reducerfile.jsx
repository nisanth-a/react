const initialState = 30000;
const modifyNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 10000;
    case "DECREMENT":
      return state - 10000;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default modifyNumber;
