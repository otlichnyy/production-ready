import React from "react";
import { render } from "@test";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<Main />);

    expect(component).toBeTruthy();
  });

  it("renders texts successfuly", () => {
    const { getByText } = render(<Main />);

    getByText("superplate-revived");
    getByText("The frontend boilerplate with superpowers!");
  });

  it("renders button successfuly", () => {
    const { getByText } = render(<Main />);

    getByText("Docs");
  });
});
