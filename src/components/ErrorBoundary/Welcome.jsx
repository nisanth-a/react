import React from "react";
import UserProfile from "./UserProfile";
import ErrorBoundaryComponent from "./ErrorBoundaryComponent";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome Component</h1>
      <b>Error Boundary</b>
      <ErrorBoundaryComponent>
        <UserProfile name="Tom" />
      </ErrorBoundaryComponent>
      <ErrorBoundaryComponent>
        <UserProfile name="Mary" />
      </ErrorBoundaryComponent>
      <ErrorBoundaryComponent>
        <UserProfile name="Sai" />
      </ErrorBoundaryComponent>
    </div>
  );
}
