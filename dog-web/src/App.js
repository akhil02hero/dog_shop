import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setdata] = useState([{}]);
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((response) => setdata(response));
  }, []);
  console.log(data);

  return <div>App</div>;
};

export default App;
