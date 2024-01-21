import React from "react";
import "react-color-palette/css";
import ColorButton from "./color-button";

type Props = {
  team: number;
};

const TeamConfigurationColor = ({ team }: Props) => {
  return (
    <div className="w-full h-fit flex flex-col gap-4 justify-center items-center">
      <div className="w-full h-fit flex gap-2">
        <ColorButton team={team} type="primary" />
        <ColorButton team={team} type="secondary" />
        <ColorButton team={team} type="mutual" />
      </div>
    </div>
  );
};

export default TeamConfigurationColor;
