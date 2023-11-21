"use client";

import { useRef } from 'react'
import { useIsVisible } from '@/app/_lib/useIsVisible';


const Stats = () => {

    const ref = useRef()
    const isVisible = useIsVisible(ref)

    return <>
        <section className='bg-[#F3F4F5] text-[#344054] w-full flex justify-center pt-8 pb-12'>
            <section className='flex flex-col gap-6'>
                <section className='text-center'>
                    <h1 className='text-[1.5rem] md:text-[2rem] font-bold'>Our Statistics</h1>
                </section>
                <section ref={ref} className={`grid sm:grid-cols-4 gap-4 lg:gap-6 xl:gap-10   transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    <section className='text-center font-medium'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>5 years + <br /> Experience</p>
                    </section>
                    <section className='text-center font-medium'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>2000+ <br /> Completed Projects</p>
                    </section>
                    <section className='text-center font-medium'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>259 <br /> Ongoing Projects</p>
                    </section>
                    <section className='text-center font-medium'>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>3000 + <br /> Happy Customers</p>
                    </section>
                </section>
            </section>
        </section>
    </>
}

export default Stats