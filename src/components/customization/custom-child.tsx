import React, { useState } from "react";
import CustomCss from "./custom-css";
import { Child } from "@/app/(routes)/customization/page";

type Props = {
  child: Child;
};

const CustomChild = ({ child }: Props) => {
  const { name } = child;
  const [open, setOpen] = useState(false);
  const [svelte, setSvelte] = useState(`/* Insert CSS For Element Here */`);

  const toggleOpen = () => setOpen((currOpen) => !currOpen);
  return (
    <div className="text-base rounded-md bg-gray-900 p-4 gap-5 flex flex-col">
      <div className="flex justify-between">
        <h3 className="">{name}</h3>
        <button onClick={toggleOpen}>{open ? "Close" : "View"}</button>
      </div>
      {open && (
        <>
          <CustomCss svelte={svelte} setSvelte={setSvelte} />
        </>
      )}
    </div>
  );
};

export default CustomChild;
