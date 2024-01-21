"use client";
import React, { useState } from "react";
import NavbarTab from "./navbar-tab";
import {
  IconScoreboard,
  IconHomeHeart,
  IconNotebook,
  IconServer,
  IconPencil,
  IconNotes,
} from "@tabler/icons-react";
import { useWebSocketStatus } from "../providers/websocket-status-provider";
import { useCurrentPage } from "../providers/current-page-provider";

type Props = {};

const NavbarTabs = (props: Props) => {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const status = useWebSocketStatus();
  const tabs = [
    {
      title: "Home",
      icon: IconHomeHeart,
      link: "/",
      classes: "text-white",
    },
    {
      title: "Instructions",
      icon: IconNotebook,
      link: "/instructions",
      classes: "text-",
    },
    {
      title: "Scorebug",
      icon: IconScoreboard,
      link: "/scorebug",
      classes: "text-orange-500",
    },
    {
      title: "Customization",
      icon: IconPencil,
      link: "/customization",
      classes: "text-blue-400",
    },

    {
      title: "Releases",
      icon: IconNotes,
      link: "/releases",
      classes: "text-sky-200",
    },
    {
      title: "Status",
      icon: IconServer,
      link: "/status",
      classes: `${
        status?.on && status?.reconnecting
          ? "text-yellow-400"
          : status?.connected
          ? "text-green-400"
          : status?.waitingToReconnect
          ? "text-yellow-400"
          : "text-red-400"
      }`,
    },
  ];
  return (
    <div className="w-full h-fit flex flex-col items-start gap-4 text-sm text-gray-300 p-2">
      {tabs.map((tab) => (
        <NavbarTab
          key={tab.title}
          {...tab}
          selected={tab.title === currentPage}
          setSelected={() => setCurrentPage(tab.title)}
        />
      ))}
    </div>
  );
};

export default NavbarTabs;
