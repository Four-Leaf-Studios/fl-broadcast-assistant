import React, { useState } from "react";

type Props = {
  text: string;
};

const ClickToCopy = ({ text }: Props) => {
  const [copy, setCopy] = useState(false);
  const copyLinkToClipboard = (textToCopy: string) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
        alert("Failed to copy link to clipboard.");
      });

    setCopy(true);
  };

  return (
    <span
      className="relative text-purple-500 underline cursor-pointer group"
      onClick={() => copyLinkToClipboard(text)}
      onMouseEnter={() => setCopy(false)}
    >
      {text}
      <span
        onClick={() => copyLinkToClipboard(text)}
        className="absolute top-7 left-0 opacity-0 group-hover:opacity-100 text-stone-800 bg-stone-200 rounded-md p-2 no-underline transition-all duration-300 shadow-md"
      >
        {copy ? "Copied" : "Click to Copy Link"}
      </span>
    </span>
  );
};

export default ClickToCopy;
