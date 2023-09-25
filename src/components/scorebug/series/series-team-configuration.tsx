import { useConfig } from "@/components/hooks/use-config";
import React from "react";

type Props = {
  team: number;
};

const SeriesTeamConfiguration = ({ team }: Props) => {
  const { team_info, series, updateSeries } = useConfig();

  const onChange = (e: { target: { value: any } }) => {
    updateSeries({
      ...series,
      [team]: { ...series[team], score: e.target.value },
    });
  };

  return (
    <div className="col-span-1 flex flex-col justify-start items-start gap-2">
      <span>{team_info?.[team]?.name}</span>
      <input
        type="number"
        className="bg-[#2A3038] w-full p-2 rounded-sm"
        placeholder="score"
        value={series?.[team]?.score}
        onChange={onChange}
      />
    </div>
  );
};

export default SeriesTeamConfiguration;
