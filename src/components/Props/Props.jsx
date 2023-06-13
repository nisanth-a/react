import React from "react";
import Avatar from "./Avatar";

function Profile() {
  const avatarObject = {
    size: 300,
    name: "react-image",
    url: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
  };
  return (
    <>
      <h1>Props</h1>
      <div className="intro-article">
        <Avatar {...avatarObject} />

        <Avatar
          size={100}
          name={"react-native-image"}
          url={
            "https://blog.logrocket.com/wp-content/uploads/2020/07/react-native-geolocation.png"
          }
        />
      </div>
    </>
  );
}

export default Profile;
