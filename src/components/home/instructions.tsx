"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Props = {};

const Instructions = (props: Props) => {
  const [copy, setCopy] = useState(false);
  const copyLinkToClipboard = () => {
    const linkToCopy = "https://rl-broadcast-overlay-woad.vercel.app/";

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
        alert("Failed to copy link to clipboard.");
      });

    setCopy(true);
  };

  return (
    <>
      <span className="text-xl text-center text-white">
        Welcome to RL Broadcaster!
      </span>
      <p className="text-left text-sm text-gray-400">
        RL Broadcaster lets you easily switch and edit between overlays for
        Rocket League. Instructions are below!
      </p>
      <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
        <span className="text-lg text-left text-white">STEP 1</span>
        <p className="text-left text-sm text-gray-400">
          Grab the following link and place it in your browser source for the
          stream. Then set the width and height to 1920 by 1080. (This video is
          for other software but the principle applies)
        </p>
        <span
          className="relative text-purple-500 underline cursor-pointer group"
          onClick={copyLinkToClipboard}
          onMouseEnter={() => setCopy(false)}
        >
          https://florida-tech-rl-overlay.vercel.app/
          <span
            onClick={copyLinkToClipboard}
            className="absolute top-7 left-0 opacity-0 group-hover:opacity-100 text-stone-800 bg-stone-200 rounded-md p-2 no-underline transition-all duration-300 shadow-md"
          >
            {copy ? "Copied" : "Click to Copy Link"}
          </span>
        </span>
        <div className="w-full h-full overflow-hidden rounded-md shadow-md">
          <ReactPlayer
            url="https://youtu.be/TpvvXMqXUU0"
            width={"100%"}
            height={300}
          />
        </div>
      </div>

      <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
        <span className="text-lg text-left text-white">STEP 2</span>
        <p className="text-left text-sm text-gray-400">
          Navigate to Scorebug by using the navigation side bar on the left of
          this page. From there you can edit your team. IMPORTANT NOTE: The
          color picker will cause the scoreboard to lag if you drag it
          everywhere. Figure out the hex code of the teams color and type it in
          rather than drag. If you notice it&apos;s lagging reload the web
          source or refresh cache.
        </p>
        <ReactPlayer
          url="https://youtu.be/sRx5k7NCE5U?si=rfxAKVQIXh9DZ9V7"
          width={"100%"}
          height={300}
        />
      </div>
      <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
        <span className="text-lg text-left text-white">STEP 3</span>
        <p className="text-left text-sm text-gray-400">
          Once you are done editing, just hop into a game of rocket league and
          test it out. You should see the scoreboard and the colors. Also if you
          switch from one scene to another too quickly, the browser source may
          not connect to the config, so make sure when you switch scenes, you
          wait a second or two to switch back.
        </p>
      </div>
      <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
        <span className="text-lg text-left text-white">Known Problems</span>
        <p className="text-left text-sm text-gray-400">
          1. Laggy scoreboard: Refresh cache of browser source or restart
          broadcast.
        </p>
        <p className="text-left text-sm text-gray-400">
          2. Site not updating after changes: Refresh cache of browser source or
          restart broadcast.
        </p>
      </div>
      <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
        <span className="text-lg text-left text-white">
          THAT IS IT! ENJOY :P
        </span>
      </div>
    </>
  );
};

export default Instructions;
