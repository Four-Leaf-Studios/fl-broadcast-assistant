import React, { useState } from "react";
import { useConfig } from "../hooks/use-config";

type Props = {};

const parseWithData = (htmlString: string, data: any): string => {
  const regex = /{{\s*([^}]+)\s*}}/g;

  return htmlString.replace(regex, (match, path) => {
    // Split the path by dots, but also handle array indices correctly
    const keys = path.match(/[^.[\]]+/g) || [];
    let currentData: any = data;

    try {
      for (const key of keys) {
        if (isNaN(+key)) {
          currentData = currentData[key];
        } else {
          currentData = currentData[parseInt(key, 10)];
        }
      }
    } catch {
      // Return the original placeholder if the path is not valid
      return match;
    }

    return currentData !== undefined ? currentData : match;
  });
};

const CustomChild = (props: Props) => {
  const config = useConfig();
  const [html, setHtml] = useState(
    `<div style="background:{{colors[0].primary}}">
	This is a html element with data {{colors[0].primary}}
</div>`
  );

  const parsedHtml = parseWithData(html, config);

  const handleKeyDown = (e: any) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      // Set the textarea value to: text before caret + tab + text after caret
      setHtml(html.substring(0, start) + "\t" + html.substring(end));
      // Put caret at right position again (after the tab character)
      e.target.selectionStart = e.target.selectionEnd = start + 1;
    }
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col w-full bg-gray-900 rounded-md p-5">
        <h4>This is a preview of your element</h4>
        <div className="w-full p-5 bg-white text-black rounded-md">
          <div dangerouslySetInnerHTML={{ __html: parsedHtml }} />
        </div>
      </div>
      <textarea
        className="bg-gray-900 p-5 rounded-md h-[60vh]"
        onKeyDown={handleKeyDown}
        onChange={(e) => setHtml(e.target.value)}
        value={html}
      />
    </div>
  );
};

export default CustomChild;
