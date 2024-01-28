"use client";
import React, { useEffect, useState } from "react";
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";
import { modifyLinks } from "@/lib/utils";
import { marked } from "marked";
import useSiteWindow from "./hooks/useSiteWindow";

const TitleBarButton = ({ src = "", onClick }: { onClick: any; src: any }) => {
  return (
    <div
      className="inline-flex justify-center items-center w-[25px] h-full text-white fill-white hover:bg-gray-800/50 cursor-pointer"
      id="titlebar-minimize"
      onClick={onClick}
    >
      {src}
    </div>
  );
};

const TitleBar = () => {
  const [manifest, setManifest] = useState<any>();
  const { appWindow } = useSiteWindow();

  const windowMinimize = () => appWindow?.minimize();
  const windowMaximize = () => appWindow?.maximize();
  const windowClose = () => appWindow?.close();

  function startInstall(newVersion: any) {
    installUpdate().then(relaunch);
  }

  // update checker
  useEffect(() => {
    checkUpdate().then(({ shouldUpdate, manifest }) => {
      if (shouldUpdate) {
        setManifest(manifest);
      }
    });
  }, []);

  return (
    <div
      className="w-full h-[25px] fixed top-0 flex items-center justify-end bg-gray-700 text-white webview-drag-region gap-1"
      data-tauri-drag-region="true"
    >
      {manifest && (
        <div className="fixed bottom-0 right-0 m-10 bg-gray-950 rounded-md p-10 w-1/2 lg:w-1/4 flex flex-col gap-5 justify-start items-center group hover:w-2/3">
          <h1 className="text-start w-full text-lg">
            Version {manifest?.version} Available
          </h1>
          <div
            className="w-full h-fit overflow-y-auto hidden group-hover:flex flex-col"
            dangerouslySetInnerHTML={{
              __html: modifyLinks(
                marked.parse(manifest?.body) as string
              ) as string,
            }}
          />

          <button
            className="bg-green-500 rounded-md p-2 w-full"
            onClick={() => startInstall(manifest?.version)}
          >
            Click to Install
          </button>
        </div>
      )}
      <TitleBarButton
        src={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="#yourColor"
          >
            <path d="M20,14H4V10H20" />
          </svg>
        }
        onClick={windowMinimize}
      />
      <TitleBarButton
        src={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 25 25"
          >
            <path fill="currentColor" d="M4 4h16v16H4zm2 4v10h12V8z" />
          </svg>
        }
        onClick={windowMaximize}
      />
      <TitleBarButton
        src={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 25 25"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        }
        onClick={windowClose}
      />
    </div>
  );
};

export default TitleBar;
