"use client";

import { HomeContextProps, HomeProviderProps } from "./types";
import { createContext, useContext, useState } from "react";

const HomeContext = createContext<HomeContextProps | undefined>(undefined);

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [newString, setNewString] = useState<string>("Testing for string");

  const handleSubmit = (e: any, form: any) => {
    console.log(form);
  };

  return (
    <HomeContext.Provider
      value={{ isNavOpen, setIsNavOpen, newString, setNewString, handleSubmit }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a AppProvider");
  }
  return context;
};
