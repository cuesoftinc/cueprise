import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders homepage", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homepage = screen.getByTestId("homepage");
  expect(homepage).toBeInTheDocument();
});

test("renders navigation bar", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
});

test("renders footer", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});
