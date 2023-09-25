"use client";
import React from "react";
import TeamConfiguration from "./team-configuration";
import { useConfig } from "../../hooks/use-config";

type Props = {};

const TeamsConfiguration = (props: Props) => {
  return (
    <div className="rounded-sm text-base font-normal grid grid-cols-2 gap-4">
      <TeamConfiguration team={0} />
      <TeamConfiguration team={1} />
    </div>
  );
};

export default TeamsConfiguration;
