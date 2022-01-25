import React from "react";
import { render, screen } from "@test";
import data from "@public/meta.json";
import { Cards } from "./index";

describe("Cards component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Cards />);

    expect(view).toBeTruthy();
  });

  it("cards length must be equal to the length of the meta data", () => {
    render(<Cards />);

    const cardContainer = screen.getAllByTestId("container");
    expect(cardContainer).toHaveLength(data.plugins.length);
  });
});
