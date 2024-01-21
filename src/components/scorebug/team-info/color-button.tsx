import { useConfig } from "@/components/hooks/use-config";
import React, { useState, useEffect, useRef } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

type Props = {
  team: number;
  type: "primary" | "secondary" | "mutual";
};

const ColorButton = ({ team, type }: Props) => {
  const { colors, updateColors } = useConfig();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const initialColor = colors?.[team]?.[type] || "#ffffff";
  const [color, setColor] = useColor(initialColor);
  const colorPickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (colors?.[team]?.[type] !== color?.hex && showColorPicker) {
      updateColors({
        ...colors,
        [team]: { ...colors[team], [type]: color?.hex },
      });
    }
  }, [color, colors, showColorPicker, team, type, updateColors]);

  // useEffect(() => {
  //   if (colors?.[team]?.[type] !== color?.hex)
  //     setColor(initializeColor(colors?.[team]?.[type] || "#ffffff"));
  // }, [color?.hex, colors, setColor, team, type]);

  // Add a click event listener to the document to close the color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setShowColorPicker(false);
      }
    };

    // Attach the event listener when the color picker is shown
    if (showColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColorPicker]);

  return (
    <div className="h-fit w-full flex flex-col justify-center items-center gap-3">
      <span className="uppercase text-xs">{type}</span>
      <div
        onClick={() => setShowColorPicker((prev) => !prev)}
        className={"w-10 h-10 rounded-md cursor-pointer"}
        style={{ background: colors?.[team]?.[type] }}
      />
      {showColorPicker && (
        <div className="fixed left-0 bottom-0 p-5" ref={colorPickerRef}>
          <ColorPicker
            height={150}
            color={color}
            onChange={setColor}
            hideAlpha
            hideInput={["rgb", "hsv"]}
          />
        </div>
      )}
    </div>
  );
};

export default ColorButton;
