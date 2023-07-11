import React, { useEffect, useState } from "react";

export default function FetchCall() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetch API</h2>
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <p key={user.id}>
              {user.id} {user.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
