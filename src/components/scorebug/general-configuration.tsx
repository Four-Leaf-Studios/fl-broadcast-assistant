"use client";
import React from "react";
import { useConfig } from "../hooks/use-config";

const GeneralConfiguration = () => {
  const { swapTeams, resetColors } = useConfig();
  return (
    <div className="bg-gray-900 rounded-sm text-base font-normal flex flex-col justify-start items-start gap-4">
      <span className="">General Configuration</span>
      <div className="flex justify-center items-center text-base font-normal gap-4">
        <button
          onClick={swapTeams}
          className="w-fit rounded-md bg-[#2A3038] p-2 hover:bg-zinc-800"
        >
          Swap Teams
        </button>
        <button
          onClick={resetColors}
          className="w-fit rounded-md bg-[#2A3038] p-2 hover:bg-zinc-800"
        >
          Reset Colors
        </button>
      </div>
    </div>
  );
};

export default GeneralConfiguration;
