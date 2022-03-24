import React, { useState, useContext } from "react";
import Counter from "./TestHook/Counter";
import TestHook from "./TestHook/TestHook";
import TestHookReducer from "./TestHookReducer/TestHookReducer";
import Context from "./store/context";
import TestHookContext from "./TestHookContext/TestHookContext";
import TestAxios from "./TestAxios/TestAxios";

const AppFunction = () => {
  const [state, setState] = useState("Some Text");
  const [name, setName] = useState("Moe");

  const changeName = () => {
    setName("Steve");
  };
  const changeText = () => {
    setState("Some Other Text");
  };

  return (
    <div className="App">
      {/* <Basic /> */}
      <h1> Counter </h1>
      <Counter />
      <h1> Basic Hook useState </h1>
      <TestHook name={name} changeName={changeName} />
      <TestHookReducer />
      <Context.Provider
        value={{ changeTextProp: changeText, stateProp: state }}
      >
        <TestHookContext />
      </Context.Provider>
      {/* <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" /> */}
    </div>
  );
};

export default AppFunction;
