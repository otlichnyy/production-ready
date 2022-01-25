import React from "react";
import { render, screen } from "@test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Main />);

    expect(view).toBeTruthy();
  });

  it("renders texts successfuly", () => {
    render(<Main />);

    expect(screen.getByText("superplate-revived")).toBeInTheDocument();
    expect(
      screen.getByText("The frontend boilerplate with superpowers!"),
    ).toBeInTheDocument();
  });
});
