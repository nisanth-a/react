// UserThunk.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserThunk } from "./storeThunk";

const UserThunk = () => {
  const { loading, user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFetchUser = () => {
    dispatch(fetchUserThunk(1));
  };

  return (
    <div>
      <h2 className="ui header">User Details - Redux Thunk</h2>
      <button
        className="ui primary button"
        onClick={handleFetchUser}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch User"}
      </button>
      <br></br>
      <br></br>
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

export default UserThunk;
