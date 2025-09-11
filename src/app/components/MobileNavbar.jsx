"use client"

import {useState} from 'react'
import GroupLink from './GroupLink'
import { GiHamburgerMenu } from "react-icons/gi";
import { navbar } from '../elements';

export default function MobileNavbar() {
    const [showNav, setShowNav] = useState(false)

    function handleMobileNavigation (){
        setShowNav(!showNav)
    }
    const mobile = navbar.map((item, index) =>(
    <GroupLink key={index} title={item.name} link={item.href} />
    ))

  return (
    <>
    <ul className='md:hidden flex justify-between text-white bg-[#182239] px-8 py-5 gap-8'>
        <li className='text-xl cursor-pointer'
        onClick={handleMobileNavigation}><GiHamburgerMenu /></li>
        <GroupLink title="Home" link="/" />
    </ul>

    {showNav &&
    <ul className='md:hidden flex flex-col justify-start items-start text-white bg-gray-700 px-8 py-5 gap-4 h-screen w-4/5' onClick={handleMobileNavigation}>
        {mobile}
    </ul>
    }
    </>
  )
}
