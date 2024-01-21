import { useState, useEffect, useCallback } from "react";
import { useConfig } from "./use-config";

function useWebSocket(port: number) {
  const { config } = useConfig();
  const [on, setOn] = useState(true);
  const [connected, setConnected] = useState(false);
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);
  const [waitingToReconnect, setWaitingToReconnect] = useState(false);
  const [noConfig, setNoConfig] = useState(false);
  const onOpen = useCallback((event: Event) => {
    console.log("WebSocket connection opened:", event);

    setConnected(true);
    // You can send data or perform actions here after the connection is open
  }, []);

  const onMessage = useCallback((event: MessageEvent) => {
    console.log("WebSocket message received:", event);
    const data = JSON.parse(event.data);
    if (data.event === "config:no_config") setNoConfig((prev) => !prev);
  }, []);

  const onClose = useCallback(
    (event: CloseEvent) => {
      setConnected(false);
      console.log("WebSocket connection closed:", event);
      // Handle the connection being closed here
      if (waitingToReconnect) return;

      setWaitingToReconnect(true);
      setTimeout(() => {
        setWaitingToReconnect(false);
        console.log("BLAH", waitingToReconnect);
      }, 2000);
    },
    [waitingToReconnect]
  );

  const onError = useCallback(
    (event: Event) => {
      setConnected(false);
      console.error("WebSocket error:", event);
      if (waitingToReconnect) return;

      setWaitingToReconnect(true);
      setTimeout(() => {
        setWaitingToReconnect(false);
        console.log("BLAH", waitingToReconnect);
      }, 10000);
      // Handle any errors that occur with the WebSocket connection
    },
    [waitingToReconnect]
  );

  const disable = () => setOn(false);
  const enable = () => setOn(true);

  useEffect(() => {
    if (on) {
      // Construct the WebSocket URL with the specified port
      const url = `ws://localhost:${port}`;

      // Initialize WebSocket connection
      const newWebSocket = new WebSocket(url);

      // Set up event handlers for WebSocket
      newWebSocket.onopen = onOpen;
      newWebSocket.onmessage = onMessage;
      newWebSocket.onclose = onClose;
      newWebSocket.onerror = onError;

      setWebsocket(newWebSocket);
      return () => {
        newWebSocket.close();
        setWebsocket(null);
      };
    }
  }, [port, onOpen, onMessage, onClose, onError, waitingToReconnect, on]);

  useEffect(() => {
    if (on && websocket && websocket.readyState === WebSocket.OPEN && config) {
      console.log("SENDING CONFIG TO OVERLAY", config);
      // Assuming config is an object, you can send it as a JSON string
      const payload = JSON.stringify({
        event: "config:update_config",
        data: config,
      });
      websocket?.send(payload);
    }
  }, [config, websocket, noConfig, on]);

  return {
    connected,
    disable,
    enable,
    on,
    waitingToReconnect,
    reconnecting: on && !connected,
  };
}

export default useWebSocket;
