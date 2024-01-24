"use client";
import { TCustomOverlay } from "@/app/(routes)/customization/page";
import React, { useEffect, useState } from "react";
import CustomCss from "./custom-css";
import { useConfig } from "../hooks/use-config";

const CustomOverlayContent = ({ css: defaultCSS }: TCustomOverlay) => {
  const { updateClasses, config } = useConfig();

  const classes = convertToCSS(config.classes || {});

  function convertToCSS(classes: { [key: string]: string }) {
    let cssString = "";

    for (const className in classes) {
      if (classes.hasOwnProperty(className)) {
        cssString += `.${className} {\n${classes[className]}\n}\n`;
      }
    }

    return cssString;
  }

  useEffect(() => {
    const cssString = convertToCSS(defaultCSS);
    updateClasses(cssString);
  }, [defaultCSS, updateClasses]);

  return (
    <div className="flex flex-col gap-5">
      <CustomCss css={classes} setCSS={updateClasses} />
    </div>
  );
};

export default CustomOverlayContent;
