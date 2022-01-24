import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<Card />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});
