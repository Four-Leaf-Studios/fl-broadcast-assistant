"use client";
import { useCallback, useContext } from "react";
import { Config, ConfigContext } from "../providers/config-provider";

const defaultConfig: Config = {
  colors: [
    { primary: "#700", secondary: "#FFF", mutual: "#121013" },
    { primary: "#00549A", secondary: "#FFF", mutual: "#121013" },
  ],
  logos: [
    {
      primary:
        "https://floridatechsports.com/images/responsive_2021/AT-Panther_head-only.png",
    },
    {
      primary:
        "https://cdn.discordapp.com/attachments/822578384479322160/1092609383868923954/eSports.png",
    },
  ],
  team_info: [
    {
      name: "Florida Tech",
      players: {
        DASC: {
          photo: "",
        },
        BEASTINNFEASTIN: {
          photo: "",
        },
        AYYLO: {
          photo: "",
        },
      },
    },
    {
      name: "EARU Varsity",
      players: {},
    },
  ],
  series: {
    best_of: 3,
    [0]: {
      score: 1,
    },
    [1]: {
      score: 1,
    },
  },
  classes: undefined,
};
export const useConfig = () => {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }

  const { config, setConfig } = context;

  const resetColors = () => {
    setConfig((oldConfig) => {
      return { ...oldConfig, colors: defaultConfig.colors };
    });
  };
  // Create functions to update the configuration
  const updateColors = (newColors: any) => {
    console.log(newColors);
    setConfig((prevConfig) => ({ ...prevConfig, colors: newColors }));
  };

  const updateLogos = (newLogos: any) => {
    setConfig((prevConfig) => ({ ...prevConfig, logos: newLogos }));
  };

  const updateTeamInfo = (newTeamInfo: any) => {
    setConfig((prevConfig) => ({ ...prevConfig, team_info: newTeamInfo }));
  };

  const updateSeries = (newSeries: any) => {
    setConfig((prevConfig) => ({ ...prevConfig, series: newSeries }));
  };

  // Create a function to swap team information
  function swapTeams() {
    // Update the state
    setConfig((oldConfig) => {
      // Get the current values for team 0 and team 1
      const team0Info = oldConfig.team_info[0];
      const team0Logo = oldConfig.logos[0];
      const team0Colors = oldConfig.colors[0];

      const team1Info = oldConfig.team_info[1];
      const team1Logo = oldConfig.logos[1];
      const team1Colors = oldConfig.colors[1];
      return {
        ...oldConfig,
        team_info: [{ ...team1Info }, { ...team0Info }],
        colors: [{ ...team1Colors }, { ...team0Colors }],
        logos: [{ ...team1Logo }, { ...team0Logo }],
      };
    });
  }

  function cssToJS(cssString: string) {
    const jsStyles: any = {};
    // Split the CSS string by closing braces
    const rules = cssString.split("}");

    for (let rule of rules) {
      if (rule.trim() !== "") {
        // Split rule by opening brace
        const parts = rule.split("{");
        const className = parts[0].trim().replace(".", ""); // Remove the dot
        const styles = parts[1].trim();
        jsStyles[className] = styles;
      }
    }

    return jsStyles;
  }

  const updateClasses = useCallback(
    (newClasses: string) => {
      setConfig((prevConfig) => ({
        ...prevConfig,
        classes: cssToJS(newClasses),
      }));
    },
    [setConfig]
  );

  return {
    colors: config?.colors,
    team_info: config?.team_info,
    logos: config?.logos,
    series: config?.series,
    config: config,
    updateColors,
    updateLogos,
    updateTeamInfo,
    updateSeries,
    swapTeams,
    resetColors,
    updateClasses,
  };
};
