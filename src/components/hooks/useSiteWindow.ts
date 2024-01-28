import { WebviewWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";

const useSiteWindow = () => {
  const [appWindow, setAppWindow] = useState<WebviewWindow>();
  const [browserWindow, setBrowserWindow] = useState<any>();

  const setupWindows = async () => {
    const appWindow = (await import("@tauri-apps/api/window")).appWindow;
    // Set the origin only if window is available
    setAppWindow(appWindow);
    setBrowserWindow(window);
  };
  useEffect(() => {
    setupWindows();
  }, []);

  return { browserWindow, appWindow };
};

export default useSiteWindow;
