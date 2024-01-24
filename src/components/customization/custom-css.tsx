import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

type Props = {
  css: string;
  setCSS: (value: string) => void;
};

const CustomCss = ({ css, setCSS }: Props) => {
  return (
    <div className="w-full relative">
      <AceEditor
        placeholder="Type Svelte here"
        mode="css"
        theme="twilight"
        name="Html Preview"
        className="text-current bg-gray-900 rounded-md"
        onChange={(value: string) => setCSS(value)}
        fontSize={14}
        width={"100%"}
        height={"70vh"}
        showPrintMargin={true}
        showGutter={false}
        highlightActiveLine={true}
        value={css}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CustomCss;
