"use client";
import Checkbox from "@/components/checkbox";
import { useWebSocketStatus } from "@/components/providers/websocket-status-provider";
import {
  IconCheck,
  IconCheckbox,
  IconCircleArrowDown,
  IconSquare,
} from "@tabler/icons-react";
import React from "react";

type Props = {};

const Status = (props: Props) => {
  const status = useWebSocketStatus();
  if (!status) return <div>Waiting on websocket server...</div>;

  const { on, disable, enable, connected, waitingToReconnect, reconnecting } =
    status;

  const toggleWebSocketServer = (
    on: boolean,
    disable: Function,
    enable: Function
  ) => {
    on ? disable() : enable();
  };

  return (
    <>
      <p className="text-gray-200">
        When turning off server, you will need to refresh the browser source so
        that it connects again to configure the teams. When disconnecting it
        stops the connection from this app to the site.
      </p>
      <Checkbox
        checked={on}
        disabled={waitingToReconnect || reconnecting}
        label={on ? "Turn Off" : "Turn On"}
        classes={{
          root: "flex justify-start items-center gap-3",
          checked: `cursor-pointer ${
            reconnecting ? "text-yellow-400" : "text-green-400"
          }`,
          unchecked: `cursor-pointer ${
            waitingToReconnect ? "text-yellow-400" : "text-red-400"
          }`,
        }}
        toggleChecked={() => toggleWebSocketServer(on, disable, enable)}
      />

      {waitingToReconnect && (
        <span className="w-full p-6 rounded-sm bg-yellow-400 flex gap-3">
          Waiting to {on ? "Reconnect" : "Disconnect"}{" "}
          <IconCircleArrowDown className="animate-spin" />
        </span>
      )}

      {reconnecting && (
        <span className="w-full p-6 rounded-sm bg-yellow-400 flex gap-3">
          Reconnecting <IconCircleArrowDown className="animate-spin" />
        </span>
      )}

      {connected && (
        <span className="w-full p-6 rounded-sm bg-green-400">
          Websocket Server is Connected (please refresh your browser source)
        </span>
      )}
      {!connected && !reconnecting && !waitingToReconnect && (
        <span className="w-full p-6 rounded-sm bg-red-400">
          Websocket Server is Disconnected
        </span>
      )}
    </>
  );
};

export default Status;
