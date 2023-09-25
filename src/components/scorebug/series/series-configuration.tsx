"use client";
import React, { useState } from "react";
import SeriesTeamsConfiguration from "./series-teams-configuration";
import { useConfig } from "@/components/hooks/use-config";

type Props = {};

const SeriesConfiguration = (props: Props) => {
  const { series, updateSeries } = useConfig();

  // Event handler to update the input field value and allow only odd numbers
  const handleBestOfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue);

    // Check if the value is an odd number
    if (isNaN(parsedValue) || parsedValue % 2 === 0) {
      updateSeries({
        ...series,
        best_of: 3,
      });
    } else {
      updateSeries({
        ...series,
        best_of: parsedValue,
      });
    }
  };

  return (
    <div className="bg-gray-900 p-3 rounded-sm text-base font-normal flex flex-col gap-4">
      <span className="">SeriesConfiguration</span>
      <input
        className="bg-[#2A3038] p-2 rounded-sm w-fit"
        type="number"
        placeholder="Best Of"
        value={series?.best_of}
        onChange={handleBestOfChange}
      />
      <SeriesTeamsConfiguration />
    </div>
  );
};

export default SeriesConfiguration;
