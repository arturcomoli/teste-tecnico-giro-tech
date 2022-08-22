import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Home from ".";
import Providers from "../../providers";

describe("Homepage tests", () => {
  test("should be able to render homepage", async () => {
    jest
      .spyOn(React, "useEffect")
      .mockImplementation(() => ({ nome: "Selic", valor: 13.75 }));

    await act(async () => {
      render(
        <BrowserRouter>
          <Providers>
            <Home />
          </Providers>
        </BrowserRouter>
      );
    });

    const selicField = screen.getByTestId("selic");

    const period = screen.getByTestId("period");
    const value = screen.getByTestId("value");
    const submit = screen.getByText("Enviar");
    const logout = screen.getByText("Deslogar");

    await act(async () => {
      await waitFor(() => {
        expect(selicField.textContent).toContain(
          "A taxa SELIC, no momento, é de % a.a."
        );
        expect(period).toBeTruthy();
        expect(value).toBeTruthy();
        expect(submit).toBeTruthy();
        expect(logout).toBeTruthy();
      });
    });
  });
});
