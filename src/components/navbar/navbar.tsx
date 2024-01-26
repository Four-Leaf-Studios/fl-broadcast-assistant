import React from "react";
import NavbarTabs from "./navbar-tabs";
import Header from "../header";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-[40%] h-screen  flex flex-col justify-start items-start">
      <Header title="Leaf Blower" background="bg-gray-950" />
      {/* Tabs */}
      <NavbarTabs />
    </nav>
  );
};

export default Navbar;
