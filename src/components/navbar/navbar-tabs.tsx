import React from "react";
import NavbarTab from "./navbar-tab";
import { IconScoreboard, IconHomeHeart } from "@tabler/icons-react";

type Props = {};

const NavbarTabs = (props: Props) => {
  return (
    <div className="w-full h-fit flex flex-col items-start gap-4 text-sm text-gray-300">
      <span className="">Navigation</span>
      <NavbarTab icon={<IconHomeHeart />} title="Home" link="/" />
      <NavbarTab icon={<IconScoreboard />} title="Scorebug" link="/scorebug" />
    </div>
  );
};

export default NavbarTabs;
