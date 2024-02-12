import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { HomeContext } from "../src/context/homeContext";
import Home from "../src/app/page";
import HeroSection from "../src/components/HeroSection/Index";
import "./intersectionObserver";

jest.useFakeTimers();
const isNavOpen = false;
const setIsNavOpen = jest.fn();
const newString = "";
const setNewString = jest.fn();
const handleSubmit = jest.fn();

const value = { isNavOpen, setIsNavOpen, newString, setNewString, handleSubmit };
describe("Homepage", () => {
  it("renders a page Desktop Navbar", () => {
    render(
      <HomeContext.Provider value={value}>
        <Home />
      </HomeContext.Provider>,
    )
    const desktopNavbar = screen.getByTestId("desktop_navbar");
    expect(desktopNavbar).toBeInTheDocument();
  });

  it('renders MobileNavBar when isNavOpen is true', async () => {
    const { getByTestId } = render(
      <HomeContext.Provider value={{ ...value, isNavOpen: true }}>
        <Home />
      </HomeContext.Provider>,
    );

    expect(getByTestId('mobile_navbar')).toBeInTheDocument();
  });

  it('sets isNavOpen to true when clicking nav icon', async () => {
    const { getByTestId } = render(
      <HomeContext.Provider value={value}>
        <HeroSection />
      </HomeContext.Provider>,
    );

    userEvent.click(getByTestId('nav_icon'));
    await waitFor(() => {
      expect(setIsNavOpen).toHaveBeenCalledWith(true);
    });
  });

  it("renders a management section", () => {
    render(
      <HomeContext.Provider value={value}>
        <Home />
      </HomeContext.Provider>,
    )

    const management_section = screen.getByTestId("management-section");
    expect(management_section).toBeInTheDocument();
  });

  it("renders a team section", () => {
    render(
      <HomeContext.Provider value={value}>
        <Home />
      </HomeContext.Provider>,
    )

    const team_section = screen.getByTestId("team-section");
    expect(team_section).toBeInTheDocument();
  })
})