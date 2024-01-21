import { Child, TCustomOverlay } from "@/app/(routes)/customization/page";
import React from "react";
import CustomChild from "./custom-child";

const CustomOverlayContent = ({ id, name, children, css }: TCustomOverlay) => {
  return (
    <div className="flex flex-col gap-5">
      {children.map((child: Child) => (
        <CustomChild key={child.id} child={child} />
      ))}
    </div>
  );
};

export default CustomOverlayContent;
