"use client";

import Link from 'next/link'


const Footer = () => {
  return <>
  <section className='w-full h-auto shadow-lg bg-[#1D2939] text-[#F2F4F7] pt-8 pb-8 lg:pt-10 lg:pb-0 px-4 md:px-10'>
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 grid-rows-2 gap-4 sm:gap-8 lg:gap-12 font-semibold">
        <section className="lg:row-start-1 lg:col-start-1 lg:col-span-6">
            <h4 className="pb-2 text-base font-bold">Join Our Newsletter</h4>
            <p className="pb-2 text-sm font-normal">Receive Onile latest updates in your inbox</p>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <input type="email" name="email" id="email" placeholder="Email address" autoComplete="address-level2" className="block min-w-[10rem] lg:w-60 rounded-md border-0 py-1 md:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 placeholder:pl-2 placeholder:font-normal placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-[#FF7F50] sm:text-sm sm:leading-6" />
                </div>
                <button className="shrink-0 font-normal sm:font-semibold text-sm md:py-2 px-3 rounded-md text-[#FFFFFF] bg-[#FF7F50] hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                    Sign Up
                </button>
            </div>
        </section>

        <section className="lg:row-start-1 lg:col-span-2 lg:text-center h-[5rem]">
            <h4 className="text-base font-semibold">Explore</h4>
            <ul className="text-sm font-normal">
                <Link href="/archives" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>Archives</li></Link>
                <Link href="/buy" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>Buy Properties</li></Link>
                <Link href="/calc" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>Mortgage Calculator</li></Link>
            </ul>
        </section>

        <section className="lg:row-start-1 lg:col-span-2 lg:text-center">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <ul className="text-sm font-normal">
                <Link href="/about" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>About Us</li></Link>
                <Link href="/contact" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>Contact Us</li></Link>
                <Link href="/faq" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>Frequently Asked Questions</li></Link>
            </ul>
        </section>

        <section className="lg:row-start-1 lg:col-span-2 lg:text-center">
            <h4 className="text-base font-semibold">Resources</h4>
            <ul className="text-sm font-normal">
                <Link href="/news" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>News</li></Link>
                <Link href="/glossary" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>Glossary</li></Link>
                <Link href="/guide" className='hover:underline hover:font-bold focus:text-[#FF7F50]'><li>Purchase Guide</li></Link>
            </ul>
        </section>

        <section className="lg:row-start-2 col-span-full text-center">
            <p className="text-xs font-light">© 2023, Onile.com, Inc. or its affiliates</p>
        </section>

    </section>
  </section>
  </>
}

export default Footer