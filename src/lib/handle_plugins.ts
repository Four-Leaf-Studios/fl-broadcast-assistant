import { exec } from "child_process";
import path from "path";

export const checkIfHasPlugins = () => {
  return new Promise<{ buttonMash: boolean; SOS: boolean }>(
    (resolve, reject) => {
      // Replace 'check_plugins.bat' with the actual path to your batch script
      const batchScriptPath = path.join(
        __dirname,
        "../../../src/lib/check_plugins.bat"
      );

      // Execute the batch script
      exec(batchScriptPath, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing batch script: ${error}`);
          reject(error);
          return;
        }

        // Parse the output (0 or 1) to a boolean
        const [isButtonMashInstalled, isSOSInstalled] = stdout
          .trim()
          .split(" ");

        // Resolve the promise with the result
        resolve({
          buttonMash: isButtonMashInstalled === "1",
          SOS: isSOSInstalled === "1",
        });
      });
    }
  );
};
export const handleInstallPlugin = async () => {
  const batchScriptPath = path.join(
    __dirname,
    "../../../src/lib/install_plugins.bat"
  ); // Replace with the actual path to your Bash script

  return new Promise<boolean>((resolve, reject) => {
    exec(`cmd /c ${batchScriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error installing plugins: ${error}`);
        resolve(false); // Plugin installation failed
        return;
      }

      console.log("Plugins installed successfully.");
      resolve(true); // Plugin installation successful
    });
  });
};
