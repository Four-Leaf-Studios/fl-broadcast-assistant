"use client";
import React, { createContext, ReactNode, useContext, useMemo } from "react";
import useWebSocket from "../hooks/use-websocket";

// Defining the type for the context
type WebSocketStatus = {
  connected: boolean;
  on: boolean;
  disable: Function;
  enable: Function;
  waitingToReconnect: boolean;
  reconnecting: boolean;
};

// Creating the WebSocket context with an initial value of null
const WebSocketStatusContext = createContext<WebSocketStatus | undefined>(
  undefined
);

type WebSocketStatusProviderProps = {
  children: ReactNode;
};

// Provider component
export const WebSocketStatusProvider: React.FC<
  WebSocketStatusProviderProps
> = ({ children }) => {
  const { connected, disable, enable, on, waitingToReconnect, reconnecting } =
    useWebSocket(49322);

  const status = useMemo(() => {
    return {
      connected,
      disable,
      enable,
      on,
      waitingToReconnect,
      reconnecting,
    };
  }, [connected, disable, enable, on, reconnecting, waitingToReconnect]);

  return (
    <WebSocketStatusContext.Provider value={status}>
      {children}
    </WebSocketStatusContext.Provider>
  );
};

// Hook to use WebSocket status in other components
export const useWebSocketStatus = (): WebSocketStatus | null => {
  const context = useContext(WebSocketStatusContext);
  if (context === undefined) {
    throw new Error(
      "useWebSocketStatus must be used within a WebSocketStatusProvider"
    );
  }
  return context;
};
