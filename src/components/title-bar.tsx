"use client";
import React from "react";
import { appWindow } from "@tauri-apps/api/window";

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
  return (
    <div
      className="w-full h-[25px] fixed top-0 flex items-center justify-end bg-gray-700 text-white webview-drag-region gap-1"
      data-tauri-drag-region="true"
    >
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
        onClick={() => appWindow.minimize()}
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
        onClick={() => appWindow.toggleMaximize()}
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
        onClick={() => appWindow.close()}
      />
    </div>
  );
};

export default TitleBar;
