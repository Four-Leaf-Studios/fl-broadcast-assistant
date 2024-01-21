"use client";
import React, { useState } from "react";
import { marked } from "marked";

type Props = {
  id?: string;
  html_url?: string;
  name?: string;
  tag_name?: string;
  body?: any;
};

const Release = ({ id, html_url, tag_name, name, body }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((currOpen) => !currOpen);

  // Function to modify anchor tags to open links in a new tab
  const modifyLinks = (html: string) => {
    return html.replace(
      /<a(.*?)>/g,
      `<a$1 target="_blank" rel="noopener noreferrer">`
    );
  };

  // Note DOMPURIFY is preferred here but there's not really any malicious opportunities on app.
  const sanitizedBody = marked.parse(body) as string;
  const modifiedBody = modifyLinks(sanitizedBody);

  return (
    <li
      onClick={toggleOpen}
      className="bg-gray-950 p-3 rounded-md cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name || tag_name}
        </a>
        <button onClick={toggleOpen}>{open ? "Close" : "View"}</button>
      </div>

      <p
        className={`text-gray-400 transition-opacity py-5 ${
          open ? "h-fit opacity-100" : "h-0 opacity-0"
        }`}
        dangerouslySetInnerHTML={{ __html: modifiedBody }}
      />
    </li>
  );
};

export default Release;
