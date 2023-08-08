import React from "react";

export default function UserProfile(props) {
  if (props.name === "Sai") {
    throw new Error("Wrong user entered");
  } else {
    var profile = <div>Welcome User : {props.name}</div>;
  }
  return <div>{profile}</div>;
}
