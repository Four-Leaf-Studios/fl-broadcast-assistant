import React, { useRef } from "react";
import { useConfig } from "../../hooks/use-config";

type Props = {
  team: number;
};

const TeamConfigurationLogo = ({ team }: Props) => {
  const { updateLogos, logos } = useConfig();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onImageClicked = () => {
    // Trigger the click event of the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      // No file selected, you can handle this case as needed
      return;
    }

    const file = fileInput.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (!e || !e.target) return;
        const newLogo = e.target.result as string;

        // Update the config using setConfig
        updateLogos({
          ...logos,
          [team]: { ...logos[team], primary: newLogo },
        });
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      <img
        onClick={onImageClicked}
        src={
          logos?.[team]?.primary ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYmlp9JDeNMaFZzw9S3G1dVztGqF_2vq9nA&usqp=CAU"
        }
        alt=""
        className="w-20 h-20 bg-gray-500 rounded-lg overflow-hidden cursor-pointer"
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default TeamConfigurationLogo;
