import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IColor } from "react-color-palette";
export function cn(...inputs: any[]): string {
  return twMerge(clsx(inputs));
}
import { open } from "@tauri-apps/api/shell";

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove the hash (#) if it's included
  hex = hex.replace(/^#/, "");

  // Parse the R, G, B components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

// Function to convert RGB to HSV
export function rgbToHsv(
  r: number,
  g: number,
  b: number
): { h: number; s: number; v: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h, s, v;

  if (delta === 0) {
    h = 0;
  } else if (max === r) {
    h = ((g - b) / delta) % 6;
  } else if (max === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round((h * 60 + 360) % 360); // Convert hue to degrees
  s = Math.round((delta / max) * 100);
  v = Math.round((max / 255) * 100);

  return { h, s, v };
}

export function initializeColor(hexColor: string): IColor {
  // Convert the HEX color to RGB
  const rgbColor = hexToRgb(hexColor);

  // Convert the RGB color to HSV
  const hsvColor = rgbToHsv(rgbColor.r, rgbColor.g, rgbColor.b);

  // Create and return the IColor object
  const initializedColor: IColor = {
    hex: hexColor,
    rgb: {
      r: rgbColor.r,
      g: rgbColor.g,
      b: rgbColor.b,
      a: 0, // You can set the alpha (transparency) value here if needed
    },
    hsv: {
      h: hsvColor.h,
      s: hsvColor.s,
      v: hsvColor.v,
      a: 0, // You can set the alpha (transparency) value here if needed
    },
  };

  return initializedColor;
}

export const openExternal = (url: string) => {
  open(url).catch(console.error);
};

export const modifyLinks = (html: string) => {
  if (!window) return "";
  // Define handleClick as a separate function and assign it to the window object
  (window as any).handleClick = function (event: MouseEvent) {
    event.preventDefault(); // Prevent the default action
    const url = (event.target as HTMLAnchorElement).href; // Get the URL from the clicked element
    openExternal(url); // Use your custom function to open the link
  };

  return html.replace(/<a href="(.*?)"/g, (match, url) => {
    // Return the modified <a> tag with an event listener for 'click'
    return `<a href="${url}" onclick="window.handleClick(event)" `;
  });
};
