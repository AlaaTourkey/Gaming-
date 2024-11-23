import React from "react";
import { BiCategory } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart, FaHome } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import Navlink from "./Navlink";

export const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <FaHome />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <BiCategory />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <CgGames />,
  },
  {
    link: "/wishlist",
    label: "Wishlist",
    icon: <FaHeart />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
];

function Sidebar() {
  return (
    <div className="bg-teal-800 flex flex-col gap-3 col-span-2 p-4">
      {NAV_LINKS.map((navlink) => (
        <Navlink
          key={navlink.link} // Use `link` as a unique key since URLs are unique.
          navlink={navlink}
        />
      ))}
    </div>
  );
}

export default Sidebar;
