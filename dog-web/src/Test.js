import React, { useEffect, useState } from "react";

const Test = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("/api")
        .then((response) => response.json())
        .then((response) => setdata(response.users));
    }, 300);
  }, []);
  console.log(data);
  if (typeof data === "undefined") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Data is not an array.</div>;
  }

  return (
    <div>
      {typeof data === "undefined" ? (
        <div>Loading...</div>
      ) : (
        data.map((user, index) => <p key={index}>{user}</p>)
      )}
    </div>
  );
};

export default Test;
