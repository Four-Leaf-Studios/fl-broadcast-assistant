"use client";
import React from "react";
import useWebSocket from "../hooks/use-websocket";
import { cn } from "@/lib/utils";

type Props = {};

const IsConnectedToOverlay = (props: Props) => {
  const { connected } = useWebSocket(49322);
  return (
    <div
      className={cn(
        "flex-1 text-xs font-base text-green-600 bg-green-200 rounded-sm p-3 flex justify-between items-center",
        !connected && "bg-red-200 text-red-600"
      )}
    >
      Websocket Relay for Overlay Status:{" "}
      {connected ? "Connected" : "Not Connected"}
      {!connected && (
        <div className="bg-red-600 p-2 rounded-sm text-white">Reconnecting</div>
      )}
    </div>
  );
};

export default IsConnectedToOverlay;
