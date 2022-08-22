import { render, screen } from "@testing-library/react";
import React from "react";
import Home from ".";

describe("Homepage tests", () => {
  test("should be able to render homepage", async () => {
    render(<Home />);

    const selic = screen.getByTestId("selic");

    const period = screen.getByTestId("period");
    const value = screen.getByTestId("value");
    const submit = screen.getByText("Enviar");
    const logout = screen.getByText("Deslogar");

    expect(selic.textContent).toContain("A taxa SELIC, no momento, é de");
    expect(period).toBeTruthy();
    expect(value).toBeTruthy();
    expect(submit).toBeTruthy();
    expect(logout).toBeTruthy();
  });
});
