"use client";
import CustomOverlay from "@/components/customization/custom-overlay";
import React, { useState } from "react";

type Props = {};

export type Child = {
  name: string;
  id: string;
} & (
  | { content: string; children?: never }
  | { children: Child[]; content?: never }
);

export type TCustomOverlay = {
  id: string;
  name: string;
  children: Child[];
  css: string;
};

const Customization = (props: Props) => {
  const [customOverlays, setCustomOverlays] = useState<TCustomOverlay[]>([
    {
      id: "123456",
      name: "Custom Overlay 1",
      children: [{ id: "123456", name: "Photo", content: "" }],
      css: "",
    },
  ]);

  return (
    <>
      <h1 className="text-3xl">Customization</h1>
      {customOverlays.map((overlay) => (
        <CustomOverlay key={overlay.id} {...overlay} />
      ))}
    </>
  );
};

export default Customization;
