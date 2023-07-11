import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AxiosCall() {
  const [posts, setPosts] = useState([]);
  const [num, setNum] = useState("");
  const [idfromButton, setidfromButton] = useState("");
  const [error, setError] = useState("Post ID ranges from 1 - 100");

  const handleCall = () => {
    setidfromButton(num);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfromButton}`)
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data);
        }
        if (res.status === 404) {
          console.log(res.status);
          setError("Invalid Post ID Entered");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idfromButton]);

  return (
    <div>
      <h2>Axios API</h2>
      <label>Enter Post ID</label>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button type="button" onClick={handleCall}>
        Fetch Post
      </button>

      <div style={{ backgroundColor: "ghostwhite" }}>
        {idfromButton && posts.id ? (
          <pre>
            <div style={{ display: "flex" }}>
              <div>The Post ID is :</div> <div>{posts.id}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div>The Post Title is :</div> <div>{posts.title}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div>The Post Body is :</div>{" "}
              <div style={{ width: "33px" }}>{posts.body}</div>
            </div>
          </pre>
        ) : (
          error
        )}
      </div>
    </div>
  );
}
