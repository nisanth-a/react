import React from "react";

export default function Avatar({ size, name, url }) {
  return (
    <div className="avatar-image">
      <h3>Logo</h3>
      <img src={url} alt={name} width={size} height={size} />
    </div>
  );
}
