import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

type Props = {
  svelte: string;
  setSvelte: (value: string) => void;
};

const CustomCss = ({ svelte, setSvelte }: Props) => {
  return (
    <div className="w-full relative">
      <AceEditor
        placeholder="Type Svelte here"
        mode="css"
        theme="twilight"
        name="Html Preview"
        className="text-current bg-gray-900 rounded-md"
        onChange={(value: string) => setSvelte(value)}
        fontSize={14}
        width={"100%"}
        showPrintMargin={true}
        showGutter={false}
        highlightActiveLine={true}
        value={svelte}
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
