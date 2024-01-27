import React from "react";
import NavbarTabs from "./navbar-tabs";
import Header from "../header";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-[40%] lg:w-[18%] h-full flex flex-col justify-start items-start">
      <Header title="Leaf Blower" background="bg-gray-800" />
      {/* Tabs */}
      <NavbarTabs />
    </nav>
  );
};

export default Navbar;
