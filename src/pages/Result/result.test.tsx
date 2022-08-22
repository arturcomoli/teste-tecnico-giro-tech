import React from "react";
import { render, screen, within } from "@testing-library/react";
import Result from ".";
import { BrowserRouter } from "react-router-dom";

describe("Homepage tests", () => {
  test("should be able to render result page", async () => {
    render(
      <BrowserRouter>
        <Result />
      </BrowserRouter>
    );

    const list = screen.getByRole("list");

    const { getAllByRole } = within(list);

    const items = getAllByRole("listitem");

    const logout = screen.getByText("Deslogar");
    const back = screen.getByText("Voltar");

    expect(list).toBeTruthy();
    expect(items).toHaveLength(4);
    expect(logout).toBeTruthy();
    expect(back).toBeTruthy();
  });
});
