"use client";
import React, { useState, createContext, useContext, ReactNode } from "react";

// Step 1: Type the Context
interface CurrentPageContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const defaultState = {
  currentPage: "",
  setCurrentPage: () => {},
};

export const CurrentPageContext =
  createContext<CurrentPageContextType>(defaultState);

// Step 2: Type the Provider Component
interface CurrentPageProviderProps {
  children: ReactNode;
}

export const CurrentPageProvider: React.FC<CurrentPageProviderProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<string>("Home");

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

// Step 3: Type the Custom Hook
export const useCurrentPage = (): CurrentPageContextType => {
  const context = useContext(CurrentPageContext);
  if (!context) {
    throw new Error("useCurrentPage must be used within a CurrentPageProvider");
  }
  return context;
};
