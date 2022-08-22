import React from "react";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Input Component", () => {
  test("should be able to render an input", () => {
    render(<Button children={"Test Button"} />);

    expect(screen.getByText("Test Button")).toBeTruthy();
  });
});
