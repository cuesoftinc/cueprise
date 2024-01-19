import { render, screen } from "@testing-library/react";
import { HomeProvider } from "@/context";
import "@testing-library/jest-dom"
import Home from "@/app/page";



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