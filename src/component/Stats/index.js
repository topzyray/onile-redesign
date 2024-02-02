"use client";

import { useRef } from 'react'
import { useIsVisible } from '@/app/_lib/useIsVisible';
import CountUp from 'react-countup'

const Stats = () => {

    const ref1 = useRef()
    const isVisible1 = useIsVisible(ref1)

    const ref2 = useRef()
    const isVisible2 = useIsVisible(ref2)

    const ref3 = useRef()
    const isVisible3 = useIsVisible(ref3)

    const ref4 = useRef()
    const isVisible4 = useIsVisible(ref4)

    return <>
        <section className='bg-[#F3F4F5] text-[#344054] w-full flex justify-center pt-8 pb-12'>
            <section className='flex flex-col gap-6'>
                <section className='text-center'>
                    <h1 className='text-[1.5rem] md:text-[2rem] font-bold'>Our Statistics</h1>
                </section>
                <section className="grid sm:grid-cols-4 gap-4 lg:gap-6 xl:gap-10">
                    <section ref={ref1} className={`text-center font-medium    transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'><CountUp start={1} end={5} duration={2} delay={0}>1</CountUp> years + <br /> Experience</p>
                    </section>
                    <section ref={ref2} className={`text-center font-medium    transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'><CountUp start={1} end={2000} duration={2} delay={0}>1</CountUp>+ <br /> Completed Projects</p>
                    </section>
                    <section ref={ref3} className={`text-center font-medium    transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'><CountUp start={1} end={259} duration={2} delay={0}>1</CountUp> <br /> Ongoing Projects</p>
                    </section>
                    <section ref={ref4} className={`text-center font-medium    transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl'><CountUp start={1} end={3000} duration={2} delay={0}>1</CountUp>+ <br /> Happy Customers</p>
                    </section>
                </section>
            </section>
        </section>
    </>
}

export default Stats