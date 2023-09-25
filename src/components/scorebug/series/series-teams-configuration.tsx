"use client";

import { useConfig } from "@/components/hooks/use-config";
import React from "react";
import SeriesTeamConfiguration from "./series-team-configuration";

type Props = {};

const SeriesTeamsConfiguration = (props: Props) => {
  const { team_info } = useConfig();
  return (
    <div className="rounded-sm text-base font-normal grid grid-cols-2 gap-4">
      <SeriesTeamConfiguration team={0} />
      <SeriesTeamConfiguration team={1} />
    </div>
  );
};

export default SeriesTeamsConfiguration;
