import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  link: string;
};

const NavbarTab = ({ icon, title, link }: Props) => {
  return (
    <Link href={link} className="w-full flex justify-start items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-[#292C39] flex justify-center items-center">
        {icon}
      </div>
      <span>{title}</span>
    </Link>
  );
};

export default NavbarTab;
