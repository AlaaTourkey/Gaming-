import React from 'react'
import { BiCategory } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaHeart, FaHome } from 'react-icons/fa';
import Navlink from './Navlink';
import { CgGames } from 'react-icons/cg';


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
    label: "WIshlist",
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
    <div className='bg-teal-800 flex flex-col gap-3 col-span-2'>
      {NAV_LINKS.map((navlink) => (
        <Navlink navlink={navlink } label={navlink.label} icon={navlink.icon} />
      ))}
    </div>
  )
}

export default Sidebar