import Link from 'next/link'
import React from 'react'

function Navlink({navlink}:{navlink:{link:string, label:string, icon:React.ReactElement}}) {
  const {label, icon} = navlink
  
  return (
    <Link href={navlink.link} className='flex gap-2 items-center p-2 hover:bg-slate-600 rounded-md'>
      <p>{React.cloneElement(icon, {className: "w-6 h-6"})} </p> <p>{label}</p>
    </Link>
  )
}

export default Navlink