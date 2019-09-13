import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [size, setSize] = useState(50);
  const [data, setData] = useState("");
  const [preData, setPreData] = useState();

  const handleChange = e => {
    setData(e.target.value);
    setPreData(item => {
      setPreData(data);
    });
    // console.log(preData, data);
    if (data.length > preData.length) {
      setSize(size - 1);
    } else {
      setSize(size + 1);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Input Size</h1>
      <h2>Input text size will change depending on the length</h2>
      <input
        type="text"
        style={{ fontSize: size, width: "300px" }}
        value={data}
        onChange={handleChange}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
