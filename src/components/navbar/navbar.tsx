"use client";
import React from "react";
import NavbarTabs from "./navbar-tabs";
import Header from "../header";
import { useAuth } from "../providers/auth-provider";

type Props = {};

const Navbar = (props: Props) => {
  const { user } = useAuth();
  if (!user) return;

  return (
    <nav className="w-[40%] lg:w-[18%] h-full flex flex-col justify-start items-start">
      <Header title="Leaf Blower" background="bg-gray-800" />
      {/* Tabs */}
      <NavbarTabs />
    </nav>
  );
};

export default Navbar;
