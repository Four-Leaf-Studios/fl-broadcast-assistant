"use client";
import React from "react";
import { useCurrentPage } from "./providers/current-page-provider";

const Header = () => {
  const { currentPage } = useCurrentPage();
  return (
    <h1 className="text-3xl w-full bg-gray-800 p-8 py-10 text-white">
      {currentPage}
    </h1>
  );
};

export default Header;
