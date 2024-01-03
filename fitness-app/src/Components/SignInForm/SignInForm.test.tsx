// Sign In Form Unit Tests

import { render, screen } from "@testing-library/react";
import SignInForm from "./SignInForm";

test("sign in form renders", () => {
  render(<SignInForm />);
});

test("form renders input fields", () => {
  render(<SignInForm />);

  const enterUsername = screen.getByRole("textbox", {
    name: "Enter Username",
  });
  const enterPassword = screen.getByLabelText("Enter Password");

  expect(enterUsername).toBeInTheDocument();
  expect(enterPassword).toBeInTheDocument();
});
