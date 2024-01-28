import { TablerIconsProps } from "@tabler/icons-react";
import Link from "next/link";
import React, { FunctionComponent } from "react";

type Props = {
  icon: FunctionComponent<TablerIconsProps>;
  title: string;
  link: string;
  classes?: string;
  selected: boolean;
};

const NavbarTab = ({ icon: Icon, title, link, classes, selected }: Props) => {
  return (
    <>
      <Link
        href={link}
        className={`w-full flex justify-left items-center gap-2 ${
          selected && title !== "/" + "Status" ? "text-white" : "text-gray-400"
        } ${title === "Status" && classes}`}
      >
        <div className="w-8 h-8 rounded-full bg-[#292C39] flex justify-center items-center">
          <Icon className={classes ? classes : ""} />
        </div>
        <span>{title}</span>
      </Link>
    </>
  );
};

export default NavbarTab;
