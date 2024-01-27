"use client";
import React from "react";
import { useCurrentPage } from "./providers/current-page-provider";

const Header = ({ title = "", background = "bg-gray-900" }) => {
  const { currentPage } = useCurrentPage();
  return (
    <h1
      className={`text-2xl w-full ${background} p-4 text-white flex justify-start items-center mb-0.5`}
    >
      {title ? title : currentPage}
    </h1>
  );
};

export default Header;
