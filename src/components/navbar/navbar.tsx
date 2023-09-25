import React from "react";
import NavbarTabs from "./navbar-tabs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-[200px] h-screen fixed left-0 top-0 bg-gray-900 flex flex-col justify-start items-start p-2 gap-5">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center">
        <span className="w-full text-left text-white text-base font-extrabold">
          Four Leaf Studios <br />
        </span>
        <span className="w-full text-left text-white text-base font-extrabold">
          Control Panel
        </span>
      </div>

      {/* Tabs */}
      <NavbarTabs />
    </nav>
  );
};

export default Navbar;
