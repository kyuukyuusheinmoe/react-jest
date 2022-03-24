import React from "react";
import ReactDOM from "react-dom";
import TestHook from "./TestHook";
import { render, fireEvent, cleanup } from "@testing-library/react";
import AppFunction from "./AppFunction";

afterEach(cleanup);

it("Text in state is changed when button clicked", () => {
  const { getByText } = render(<TestHook />);

  expect(getByText(/Initial/i).textContent).toBe("Initial State");

  fireEvent.click(getByText("State Change Button"));

  expect(getByText(/Initial/i).textContent).toBe("Initial State Changed");
});

it("button click changes props", () => {
  const { getByText } = render(
    <AppFunction>
      <TestHook />
    </AppFunction>
  );

  expect(getByText(/Moe/i).textContent).toBe("Moe");

  fireEvent.click(getByText("Change Name"));

  expect(getByText(/Steve/i).textContent).toBe("Steve");
});
