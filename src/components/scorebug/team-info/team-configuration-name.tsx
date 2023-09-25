import React, { useEffect, useState } from "react";
import { useConfig } from "../../hooks/use-config";

type Props = {
  team: number;
};

const TeamConfigurationName = ({ team }: Props) => {
  const { updateTeamInfo, team_info } = useConfig();

  const onChange = (e: { target: { value: any } }) => {
    updateTeamInfo({
      ...team_info,
      [team]: { ...team_info[team], ["name"]: e.target.value },
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      <label>Team Name</label>
      <input
        className="bg-[#2A3038] rounded-sm w-full p-2"
        placeholder="Name"
        onChange={onChange}
        value={team_info?.[team]?.name || ""}
      />
    </div>
  );
};

export default TeamConfigurationName;
