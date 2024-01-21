import { TCustomOverlay } from "@/app/(routes)/customization/page";
import React, { useState } from "react";
import CustomOverlayContent from "./custom-overlay-content";

const CustomOverlay = (props: TCustomOverlay) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((currOpen: boolean) => !currOpen);

  return (
    <div className="w-full rounded-md bg-gray-800 flex flex-col justify-start gap-5 p-5">
      <div className="w-full flex justify-between">
        <h3 className="text-lg">{props.name}</h3>
        <button onClick={toggleOpen}>{open ? "Close" : "View"}</button>
      </div>

      {open && <CustomOverlayContent {...props} />}
    </div>
  );
};

export default CustomOverlay;
