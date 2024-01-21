import GeneralConfiguration from "@/components/scorebug/general-configuration";
import SeriesConfiguration from "@/components/scorebug/series/series-configuration";
import TeamsConfiguration from "@/components/scorebug/team-info/teams-configuration";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  return (
    <>
      <h1 className="text-3xl">Scorebug</h1>

      <GeneralConfiguration />

      <SeriesConfiguration />
      <TeamsConfiguration />
    </>
  );
};

export default page;
