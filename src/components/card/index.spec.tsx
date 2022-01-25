import React from "react";
import { render } from "@test";
import { Card } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const view = render(<Card />);

  it("renders without crashing", () => {
    expect(view).toBeTruthy();
  });
});
