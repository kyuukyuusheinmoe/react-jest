import React, { useState } from "react";
import Counter from "./Counter";
import TestHook from "./TestHook";

const AppFunction = () => {
  const [state, setState] = useState("Some Text");
  const [name, setName] = useState("Moe");

  const changeName = () => {
    setName("Steve");
  };

  return (
    <div className="App">
      {/* <Basic /> */}
      <h1> Counter </h1>
      <Counter />
      <h1> Basic Hook useState </h1>
      <TestHook name={name} changeName={changeName} />
    </div>
  );
};

export default AppFunction;
