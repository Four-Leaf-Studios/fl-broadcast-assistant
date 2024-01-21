import Release from "@/components/releases/release";
import React from "react";

type Props = {};

const Releases = async (props: Props) => {
  const res = await fetch(
    "https://api.github.com/repos/michaelheinzman/fl-broadcast-assistant/releases"
  );

  const releases = await res.json();
  return (
    <>
      <h1 className="text-3xl">Releases</h1>
      <ul className="flex flex-col gap-5">
        {releases.map((release: any) => (
          <Release key={release?.id} {...release} />
        ))}
      </ul>
    </>
  );
};

export default Releases;
