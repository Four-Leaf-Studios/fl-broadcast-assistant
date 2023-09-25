"use client";
import { cn } from "@/lib/utils";
import React from "react";
import TeamConfigurationColor from "./team-configuration-color";
import TeamConfigurationName from "./team-configuration-name";
import TeamConfigurationLogo from "./team-configuraton-logo";

type Props = {
  team: number;
};

const TeamConfiguration = ({ team }: Props) => {
  const isBlue = team === 0;
  const title = isBlue ? "Left Team" : "Right Team";
  const colorTitle = isBlue ? "Blue" : "Orange";
  const color = isBlue ? "bg-blue-500" : "bg-orange-500";

  return (
    <div className="col-span-2 md:col-span-1 min-h-[500px] bg-gray-900 p-3 rounded-sm flex flex-col gap-4">
      <div className="w-full h-fit flex justify-start items-center gap-3">
        <div
          className={cn(
            "p-2 h-fit w-fit min-w-[70px] rounded-md flex justify-center items-center text-xs",
            color
          )}
        >
          {colorTitle}
        </div>
        <span>{title}</span>
      </div>

      <TeamConfigurationLogo team={team} />
      <TeamConfigurationName team={team} />
      <TeamConfigurationColor team={team} />
    </div>
  );
};

export default TeamConfiguration;
