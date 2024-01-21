import React from "react";
import NavbarTabs from "./navbar-tabs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-fit h-screen fixed left-0 top-0 bg-gray-950 flex flex-col justify-start items-start p-2 gap-5">
      {/* Tabs */}
      <NavbarTabs />
    </nav>
  );
};

export default Navbar;
