import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRequest } from "./Actions";

const UserSaga = () => {
  const { loading, user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFetchUser = () => {
    dispatch(fetchUserRequest(3)); // Dispatch the action to fetch user data
  };

  return (
    <div>
      <h2>User Details - Redux Saga</h2>
      <button className="ui green button" onClick={handleFetchUser} disabled={loading}>
        {loading ? "Loading..." : "Fetch User"}
      </button>
      {error && <p>Error: {error}</p>}
      {user && (
        <div className="ui black message">
          <p>
            <span className="ui blue label">Name:</span> {user.name}
          </p>
          <p>
            <span className="ui blue label">Email:</span> {user.email}
          </p>
          <p>
            <span className="ui blue label">Phone:</span> {user.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserSaga;
