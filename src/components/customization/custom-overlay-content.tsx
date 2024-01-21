import { Child, TCustomOverlay } from "@/app/(routes)/customization/page";
import React from "react";
import CustomChild from "./custom-child";

const CustomOverlayContent = ({ id, name, children, css }: TCustomOverlay) => {
  return (
    <div>
      <h4>Children</h4>
      {children.map((child: Child) => (
        <CustomChild key={child.id} />
      ))}
    </div>
  );
};

export default CustomOverlayContent;
