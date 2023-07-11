import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AxiosBasic() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/3")
      .then((response) => {
        setUsers(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Id : {users.id}</p>
      <p>Title : {users.title}</p>
    </div>
  );
}
