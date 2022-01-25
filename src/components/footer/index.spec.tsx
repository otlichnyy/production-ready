import React from "react";
import { render, screen } from "@test";
import { Footer } from "./index";

describe("Footer component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Footer />);

    expect(view).toBeTruthy();
  });

  it("renders pankod logo and directed to the correct url", () => {
    render(<Footer />);

    expect(screen.getByTestId("pankod-logo").getAttribute("href")).toBe(
      "https://github.com/pankod",
    );
  });

  it("should render 4 icons successfully", () => {
    render(<Footer />);

    const icons = screen.getByTestId("icons-container");
    expect(icons.children).toHaveLength(4);
  });
});
