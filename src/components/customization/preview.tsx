import React from "react";
import { useConfig } from "../hooks/use-config";
import { parseWithData } from "./parseWithData";

type Props = {
  svelte: string;
};

const Preview = ({ svelte }: Props) => {
  const config = useConfig();

  const parsedSvelte = { __html: parseWithData(svelte, { config }) };
  return (
    <div
      className="h-fit w-full rounded-md bg-white text-black p-5"
      dangerouslySetInnerHTML={parsedSvelte}
    />
  );
};

export default Preview;
