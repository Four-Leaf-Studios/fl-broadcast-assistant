"use client";
import React, { useEffect, useState } from "react";
import { marked } from "marked";
import { modifyLinks } from "@/lib/utils";

type Props = {
  id?: string;
  html_url?: string;
  name?: string;
  tag_name?: string;
  body?: any;
};

const Release = ({ id, html_url, tag_name, name, body }: Props) => {
  const [open, setOpen] = useState(false);
  const [appWindow, setAppWindow] = useState<any>();

  const setupAppWindow = async () => {
    (await import("@tauri-apps/api/window")).appWindow;
    setAppWindow(window);
  };

  useEffect(() => {
    setupAppWindow();
  }, []);

  if (!appWindow) return;
  const toggleOpen = () => setOpen((currOpen) => !currOpen);

  // Note DOMPURIFY is preferred here but there's not really any malicious opportunities on app.
  const sanitizedBody = marked.parse(body) as string;
  const modifiedBody = modifyLinks(sanitizedBody);

  return (
    <li
      onClick={toggleOpen}
      className="bg-gray-800 p-3 rounded-md cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name || tag_name}
        </a>
        <button onClick={toggleOpen}>{open ? "Close" : "View"}</button>
      </div>

      <p
        className={`text-gray-300 transition-opacity py-5 ${
          open ? "h-fit opacity-100" : "h-0 opacity-0"
        }`}
        dangerouslySetInnerHTML={{ __html: modifiedBody }}
      />
    </li>
  );
};

export default Release;
