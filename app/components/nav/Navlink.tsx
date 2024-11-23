import React from "react";
import Link from "next/link";

const Navlink = ({
  navlink,
}: {
  navlink: { link: string; label: string; icon: JSX.Element };
}) => {
  return (
    <Link
      href={navlink.link}
      className="flex items-center gap-3 text-white p-2 rounded hover:bg-teal-700 transition"
    >
      {navlink.icon}
      <span>{navlink.label}</span>
    </Link>
  );
};

export default Navlink;
