import React, { useState } from "react";

export default function XMLcall() {
  const [data, setData] = useState();

  const getData = () => {
    const xmlreq = new XMLHttpRequest([]);

    xmlreq.open("POST", "https://jsonplaceholder.typicode.com/posts");

    xmlreq.responseType = "json";

    let newObject = {
      name: "ajay",
      title: "react",
    };

    xmlreq.onload = function () {
      if (xmlreq.status === 201) {
        let responseData = xmlreq.response;
        setData(responseData);
        console.log(responseData);
      }
    };
    xmlreq.send(newObject);
  };
  return (
    <div>
      <h2>XML HttpRequest</h2>
      <button onClick={getData}>Post Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>No Data Found</div>}
    </div>
  );
}
