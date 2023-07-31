// UserSagaWrapper.js
import React from "react";
import { Provider } from "react-redux";
import UserSaga from "./UserSaga";
import storeSaga from "./storeSaga";

const UserSagaWrapper = () => {
  return (
    <Provider store={storeSaga}>
      <UserSaga />
    </Provider>
  );
};

export default UserSagaWrapper;
