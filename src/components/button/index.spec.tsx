import React from "react";
import { fireEvent, render, screen } from "@test";
import { Button } from "./index";

describe("Button component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Button onClick={() => undefined} />);
    expect(view).toBeTruthy();
  });

  it("button is clickable", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn} />);
    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("button should present", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>Click me</Button>);
    const myElm = screen.getByText(/Click me/);
    expect(myElm).toBeInTheDocument();
  });
});
