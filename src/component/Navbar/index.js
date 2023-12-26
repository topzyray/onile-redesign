"use client";

import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/assets/onile_light_ash.png'
import user from '/public/assets/tope.png'
import avatar from '/public/assets/avatar.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const pathname = usePathname()

  const handleNav = () => {
    setMenuOpen((prevMenu) => !prevMenu)
  }

  return (
    <nav className='fixed w-full h-[5rem] sm:h-[6.5rem] shadow-b-lg bg-[#1D2939] opacity-100 text-[#F2F4F7]'>
      <div className='flex justify-between items-center h-full w-full px-4 sm:px-16'>
        <Link className={`link ${pathname === '/' ? 'focus:text-[#FF7F50] focus:font-bold' : 'hover:underline hover:font-bold'}`} href="/">
          <Image src={logo} alt='Onile Logo' className='w-16 sm:w-20'/>
        </Link>
        <div className='hidden sm:flex'>

          <ul className='hidden sm:flex gap-5 lg:gap-8 text-base md:text-lg font-base'>
            <Link className="hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold" href="/"><li>Home</li></Link>
            <Link className="hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold" href="/properties" ><li>Properties</li></Link>
            <Link className="hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold" href="/services" ><li>Services</li></Link>
            <Link className="hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold" href="/contact" ><li>Contact</li></Link>
          </ul>

          {/* <ul className='hidden sm:flex gap-5 lg:gap-8 text-base md:text-lg font-base'>
            <Link className={`link ${pathname === '/' ? 'focus:text-[#FF7F50] focus:font-bold' : 'hover:underline hover:font-bold'}`} href="/"><li>Home</li></Link>
            <Link className={`link ${pathname === '/properties' ? 'focus:text-[#FF7F50] focus:font-bold' : 'hover:underline hover:font-bold'}`} href="/properties" ><li>Properties</li></Link>
            <Link className={`link ${pathname === '/services' ? 'focus:text-[#FF7F50] focus:font-bold' : 'hover:underline hover:font-bold'}`} href="/services" ><li>Services</li></Link>
            <Link className={`link ${pathname === '/contact' ? 'focus:text-[#FF7F50] focus:font-bold' : 'hover:underline hover:font-bold'}`} href="/contact" ><li>Contact</li></Link>
          </ul> */}
          
        </div>
        <div className='hidden sm:flex flex-col items-center gap-1'>
          {isLoggedIn ? 
            <Image src={user} alt='Profile image' width={30} height={30} className="w-10 h-10 rounded-full" />
            :
            <Link href="/auth" className='flex flex-col justify-center items-center font-normal hover:font-bold hover:underline focus:font-bold'>
              <p className='focus:border-[#FF7F50]'><Image src={avatar} alt='Profile avatar' /></p>
              <p className='p-1 focus:text-[#FF7F50]'>Sign Up/Sign In</p>
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
        ? "fixed right-0 top-0 w-[40%] sm:hidden h-[30%] bg-[#1D2939] pl-10 pr-5 py-4 mt-20 ease-in duration-500"
        : "fixed right-[-100%] h-[30%] top-0 p-10 mt-20 ease-in duration-500"
      }>
        {/* <div onClick={handleNav} className='md:hidden cursor-pointer flex justify-end'>
          <AiOutlineClose className='hover:bg-[#1D2939] hover:rounded-lg p-1' size={30} />
        </div> */}

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
          {isLoggedIn ?
            <Image src={avatar} alt='Profile avatar' width={30} height={30} className='w-10 h-10 rounded-full' />
            :
            <Link href="/auth" className='font-bold hover:underline hover:font-bold focus:text-[#FF7F50] focus:font-bold'><p className='text-sm' onClick={() => setMenuOpen(false)}>Sign Up/Sign In</p></Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;