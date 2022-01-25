import React from "react";
import { render, screen } from "@test";

import { Header } from "./index";

describe("Header component testing with testing-library", () => {
  render(<Header />);
  const container = screen.getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
