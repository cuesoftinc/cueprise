import { render, screen } from "@testing-library/react";
import { HomeProvider } from "@/context";
import HeroSection from '../src/components/HeroSection';

describe("Homepage", () => {
  it("renders a navbar", () => {
    render(
      <HomeProvider>
        <HeroSection />
      </HomeProvider>,
    );

    const Hero_section = screen.getByTestId("hero-section");
    expect(Hero_section).toBeInTheDocument();
  });
})