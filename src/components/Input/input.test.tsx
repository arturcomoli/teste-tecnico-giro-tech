import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../../components/Input";
import { FieldError } from "react-hook-form";

describe("Input Component", () => {
  test("should be able to render an input", () => {
    render(
      <Input
        error={null}
        name={"Email"}
        placeholder="Email"
        register={() => {}}
      />
    );

    expect(screen.getByPlaceholderText("Email")).toBeTruthy();
  });

  test("should be able to render an error", () => {
    const inputError: FieldError = {
      message: "Campo obrigatório",
      type: "required",
    };
    render(
      <Input
        error={inputError}
        name={"Email"}
        placeholder="Email"
        register={() => {}}
      />
    );

    const error = screen.getByText(/Campo obrigatório/);

    expect(error).toBeInTheDocument();
  });
});
