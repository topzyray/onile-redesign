"use client";

import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/assets/onile_light_ash.png'
import user from '/public/assets/tope.png'
import avatar from '/public/assets/avatar.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'
import { usePathname } from 'next/navigation';

const navLinks = [
  {name: "Home", href: "/"},
  {name: "Properties", href: "/properties"},
  {name: "Services", href: "/services"},
  {name: "Contact", href: "/contact"}
]


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();

  const handleNav = () => {
    setMenuOpen((prevMenu) => !prevMenu)
  }

  return (
    <nav className='fixed w-full h-[5rem] sm:h-[6.5rem] shadow-b-lg bg-[#1D2939] opacity-100 text-[#F2F4F7]'>
      <div className='flex justify-between items-center h-full w-full px-4 sm:px-16'>
        <Link href="/">
          <Image src={logo} alt='Onile Logo' className='w-16 sm:w-20'/>
        </Link>
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex gap-5 lg:gap-8 text-base md:text-lg font-base'>

            {
              navLinks.map((link) => {
                return (
                  <Link className={pathname === link.href ? 'text-[#FF7F50] font-bold' : 'hover:underline hover:font-bold'} href={link.href} key={link.name}>
                    <li>{link.name}</li>
                  </Link>
                )
              })
            }

          </ul>
        </div>
        <div className='hidden sm:flex flex-col items-center gap-1'>
          {isLoggedIn ? 
            <Image src={user} alt='Profile image' width={30} height={30} className="w-10 h-10 rounded-full" />
            :
            <Link href="/auth" className={`${pathname === '/auth' ? 'text-[#FF7F50] font-bold' : 'hover:underline hover:font-bold'}  flex flex-col justify-center items-center font-normal`}>
              <p className=''><Image src={avatar} alt='Profile avatar' /></p>
              <p className='p-1'>Sign Up/Sign In</p>
            </Link>
          }
        </div>
        <div onClick={handleNav} className='sm:hidden cursor-pointer p-2 hover:bg-[#2a3648] hover:rounded-lg'>
          
          {!menuOpen ? <AiOutlineMenu size={25} /> :
          <AiOutlineClose className='hover:bg-[#1D2939] hover:rounded-lg p-1' size={30} />}
        </div>
      </div>

      <div className={
        menuOpen 
        ? "fixed right-0 top-0 w-auto sm:hidden h-auto bg-[#1D2939] px-10 py-5 mt-20 ease-in duration-500"
        : "fixed right-[-100%] h-auto top-0 p-5 mt-20 ease-in duration-500"
      }>

        <div className='flex flex-col w-full items-center justify-center gap-4'>
          <div className='text-center'>
            <ul className='text-sm flex flex-col gap-4'>
              {
                navLinks.map((link) => {
                  return (
                    <Link className={pathname === link.href ? 'text-[#FF7F50] font-bold' : 'hover:underline hover:font-bold'} href={link.href} key={link.name} onClick={() => setMenuOpen(false)}>
                      <li>{link.name}</li>
                    </Link>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className='py-4 mb-2'>
          {isLoggedIn ?
            <Image src={avatar} alt='Profile avatar' width={30} height={30} className='w-10 h-10 rounded-full' />
            :
            <Link href="/auth" className={`${pathname === '/auth' ? 'text-[#FF7F50] font-bold' : 'hover:underline hover:font-bold'}  flex flex-col justify-center items-center font-normal`}>
              <p className='focus:border-[#FF7F50]'><Image src={avatar} alt='Profile avatar' /></p>
              <p className='text-sm' onClick={() => setMenuOpen(false)}>Sign Up/Sign In</p>
            </Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;