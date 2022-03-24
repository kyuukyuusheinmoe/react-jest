import React from "react";
import ReactDOM from "react-dom";
import TestHookContext from "./TestHookContext";
import { act, render, fireEvent, cleanup } from "@testing-library/react";
import AppFunction from "../AppFunction";
import Context from "../store/context";

afterEach(cleanup);

it("Context value is updated by child component", () => {
  const { container, getByText } = render(
    <AppFunction>
      <Context.Provider>
        <TestHookContext />
      </Context.Provider>
    </AppFunction>
  );

  expect(getByText(/Some/i).textContent).toBe("Some Text");

  fireEvent.click(getByText("Change Text"));

  expect(getByText(/Some/i).textContent).toBe("Some Other Text");
});
