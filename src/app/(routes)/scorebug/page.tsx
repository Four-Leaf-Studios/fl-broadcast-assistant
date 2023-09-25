import GeneralConfiguration from "@/components/scorebug/general-configuration";
import SeriesConfiguration from "@/components/scorebug/series/series-configuration";
import TeamsConfiguration from "@/components/scorebug/team-info/teams-configuration";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className="h-[1000px] w-full text-white text-xl font-bold flex flex-col gap-4">
      <span>Scorebug</span>

      <GeneralConfiguration />

      <SeriesConfiguration />
      <TeamsConfiguration />
    </div>
  );
};

export default page;
