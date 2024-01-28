"use client";
import React, { memo } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "./providers/auth-provider";

function formatPath(path: string): string {
  // Remove the leading slash if it exists
  let formattedPath = path.startsWith("/") ? path.slice(1) : path;

  // Capitalize the first letter
  if (formattedPath.length > 0) {
    formattedPath =
      formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
  }

  return formattedPath;
}
const Header = memo(
  ({
    title = "",
    background = "bg-gray-900",
  }: {
    title: string;
    background: string;
  }) => {
    const { handleSignOut, user } = useAuth();

    const path = usePathname();
    const newPath = path === "/" ? "Home" : formatPath(path);

    return (
      <h1
        className={`text-2xl w-full h-20 max-h-16 ${background} p-4 text-white flex justify-between items-center mb-0.5`}
      >
        {title ? title : newPath}
        {!title && user && (
          <div className="flex gap-2 text-sm">
            <button
              onClick={() => handleSignOut()}
              className="rounded-md p-2 bg-gray-800 hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        )}
      </h1>
    );
  }
);

Header.displayName = "Header";
export default Header;
