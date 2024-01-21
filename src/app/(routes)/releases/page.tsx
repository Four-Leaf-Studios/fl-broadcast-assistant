import Release from "@/components/releases/release";
import React from "react";

const Releases = async () => {
  const res = await fetch(
    "https://api.github.com/repos/michaelheinzman/fl-broadcast-assistant/releases"
  );

  const unableToFetchReleases = () => <h1>Unable to fetch releases</h1>;

  if (!res) return unableToFetchReleases();

  const releases = await res.json();

  if (!releases) return unableToFetchReleases();
  return (
    <>
      <h1 className="text-3xl">Releases</h1>
      <ul className="flex flex-col gap-5">
        {releases?.length > 0 &&
          releases?.map((release: any) => (
            <Release key={release?.id} {...release} />
          ))}
      </ul>
    </>
  );
};

export default Releases;
