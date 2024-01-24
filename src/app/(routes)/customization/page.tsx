"use client";
import CustomOverlay from "@/components/customization/custom-overlay";
import React, { useState } from "react";
import { classes } from "@/lib/classes/classes";

type Props = {};

export type TCustomOverlay = {
  id: string;
  name: string;
  css: { [key: string]: string };
};

const Customization = (props: Props) => {
  const [customOverlays, setCustomOverlays] = useState<TCustomOverlay[]>([
    {
      id: "123456",
      name: "Default Overlay",
      css: classes,
    },
  ]);

  return (
    <>
      {customOverlays.map((overlay) => (
        <CustomOverlay key={overlay.id} {...overlay} />
      ))}
    </>
  );
};

export default Customization;
