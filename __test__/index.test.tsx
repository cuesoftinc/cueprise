import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { HomeProvider } from "@/context";
import Home from "@/app/page";
import "./intersectionObserver";

describe("Homepage", () => {
  it("renders a page", () => {
    render(
      <HomeProvider>
        <Home />
      </HomeProvider>,
    );

    const Temp = screen.getByTestId("temp");
    expect(Temp).toBeInTheDocument();
  });
})