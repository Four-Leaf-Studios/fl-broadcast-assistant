import Instructions from "@/components/home/instructions";
import { checkIfHasPlugins, handleInstallPlugin } from "@/lib/handle_plugins";

const Home = async () => {
  // let hasPlugins: { buttonMash: boolean; SOS: boolean } | undefined;

  // hasPlugins = await checkIfHasPlugins();
  // if (!hasPlugins.buttonMash || !hasPlugins.SOS) {
  //   await handleInstallPlugin();
  //   hasPlugins = await checkIfHasPlugins();
  // }

  return (
    <main className="min-h-screen w-full bg-gray-900 p-3 rounded-sm flex flex-col gap-4">
      <Instructions />
    </main>
  );
};

export default Home;
