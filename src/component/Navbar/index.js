"use client";

import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/assets/logo.png'
import avatar from '/public/assets/avatar.jpg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen((prevMenu) => !prevMenu)
  }

  return (
    <nav className='fixed w-full h-[5rem] sm:h-[8rem] shadow-lg bg-[#1D2939] text-[#F2F4F7]'>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href="/"><Image src={logo} alt='Onile Logo' width={80} height={50} /></Link>
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex gap-10 text-base md:text-lg font-bold'>
            <Link href="/" className='transition-all duration-500 ease-in-out hover:-translate-y-1 hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><li>Home</li></Link>
            <Link href="/properties" className='transition-all duration-500 ease-in-out hover:-translate-y-1 hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><li>Properties</li></Link>
            <Link href="/services" className='transition-all duration-500 ease-in-out hover:-translate-y-1 hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><li>Services</li></Link>
            <Link href="/contact" className='transition-all duration-500 ease-in-out hover:-translate-y-1 hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><li>Contact</li></Link>
          </ul>
        </div>
        <div className='hidden sm:flex flex-col items-center gap-1'>
          <Image src={avatar} alt='Profile avatar' width={30} height={30} />
          <Link href="/auth" className='font-bold transition-all duration-500 ease-in-out hover:-translate-y-1 hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><p>Sign Up/Sign In</p></Link>
        </div>
        <div onClick={handleNav} className='sm:hidden cursor-pointer p-2 hover:bg-[#2a3648] hover:rounded-lg'>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={
        menuOpen 
        ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#2a3648] pl-14 pr-5 py-4 ease-in duration-500"
        : "fixed right-[-100%] h-screen top-0 p-10 ease-in duration-500"
      }>
        <div onClick={handleNav} className='sm:hidden cursor-pointer flex justify-end'>
          <AiOutlineClose className='hover:bg-[#1D2939] hover:rounded-lg p-1' size={30} />
        </div>

        <div className='flex flex-col w-full items-start justify-center'>
          <div className='flex-col'>
            <ul className='text-sm font-bold'>
              <Link href="/" className='hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><li onClick={() => setMenuOpen(false)} className='py-2 cursor-pointer'>Home</li></Link>
              <Link href="/properties" className='hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><li onClick={() => setMenuOpen(false)} className='py-2 cursor-pointer'>Properties</li></Link>
              <Link href="/services" className='hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><li onClick={() => setMenuOpen(false)} className='py-2 cursor-pointer'>Services</li></Link>
              <Link href="/contact" className='hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><li onClick={() => setMenuOpen(false)} className='py-2 cursor-pointer'>Contact</li></Link>
            </ul>
          </div>
        </div>

        <div className='flex-col py-4 mb-2'>
          <Image src={avatar} alt='Profile avatar' width={30} height={30} />
          <Link href="/auth" className='font-bold hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><p className='text-sm'>Sign Up/Sign In</p></Link>
        </div>

        <Link href="/"><Image src={logo} alt='Onile Logo' width={80} height={50} /></Link>
      </div>
    </nav>
  )
}

export default Navbar