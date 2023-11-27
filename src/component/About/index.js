"use client";

import Image from 'next/image'
import about from '../../../public/assets/about.png'
import Link from 'next/link'
import { useRef } from 'react'
import { useIsVisible } from '@/app/_lib/useIsVisible';

const About = () => {

        const ref1 = useRef()
        const isVisible1 = useIsVisible(ref1)

        const ref2 = useRef()
        const isVisible2 = useIsVisible(ref2)

    return <>
        <section className='text-[#344054] w-full flex justify-center pt-8 pb-80 lg:pb-8'>
            <section className='flex flex-col gap-6 pb-4'>
                <section className='text-center'>
                    <h1 className='text-[1.5rem] md:text-[2rem] font-bold'>About Us</h1>
                </section>
                <section className="w-[22.25rem] md:w-[32.25rem] lg:w-[62.25rem] h-[20.9375rem] flex justify-center flex-wrap gap-4 md:gap-6 lg:gap-12">
                    <section ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                        <Image 
                            src={about} 
                            alt='About us image' 
                            className='object-cover'
                        />
                    </section>
                    <section ref={ref2} className={`flex flex-col content-start gap-4 md:gap-2 lg:w-[27.875rem] lg:px-0   transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                        <h4 className='text-[1.25rem] lg:text-[1.5rem] font-semibold text-center lg:text-left'>Our Mission</h4>
                        <p className='text-justify text-[0.9rem]'>At Onile, our mission is deeply rooted in our unwavering commitment to transforming the real estate experience for our clients. We exist to be the guiding light in your real estate journey, working tirelessly to provide you with a level of service and expertise that goes beyond the transaction. Our mission is to redefine how real estate is perceived and navigated, offering a platform that empowers you with knowledge, choices, and confidence.</p>
                        <p className='text-justify text-[0.9rem]'>We are dedicated to setting new industry standards, consistently exceeding expectations, and prioritizing your needs and aspirations above all else. We endeavor to create an environment where the dream of finding the perfect home or achieving success in property investment becomes a vivid reality. <span className='text-red-500 hover:underline hover:shadow-lg'><Link href='/about'>Read More</Link></span></p>
                    </section>                    
                </section>
            </section>
        </section>
    </>
}

export default About