// UserThunkWrapper.js
import React from "react";
import { Provider } from "react-redux";
import UserThunk from "./UserThunk";
import storeThunk from "./storeThunk";

const UserThunkWrapper = () => {
  return (
    <Provider store={storeThunk}>
      <UserThunk />
    </Provider>
  );
};

export default UserThunkWrapper;
