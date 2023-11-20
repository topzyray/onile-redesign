"use client";

import Image from 'next/image'
import about from '../../../public/assets/about.png'
import Link from 'next/link'

const About = () => {
    return <>
        <section className='bg-white text-[#344054] w-full flex justify-center py-8 px-[13.88rem]'>
            <section className='flex flex-col gap-6'>
                <section className='text-center'>
                    <h1 className='text-[1.5rem] md:text-[2rem] font-bold'>About Us</h1>
                </section>
                <section className="w-[62.25rem] h-[20.9375rem] grid md:grid-cols-2 gap-4 md:gap-4 xl:gap-12">
                    {/* <div className='order-1' style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image 
                            src={about} 
                            alt='About us image' 
                            sizes='100vw'
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                    </div> */}

                    <div className=''>
                        <Image 
                            src={about} 
                            alt='About us image' 
                            // sizes='100vw'
                            // style={{
                            //     width: '100%',
                            //     height: 'auto'
                            // }}
                            className='max-w-full h-auto'
                        />
                    </div>
                    <div className='flex flex-col content-start gap-4 md:gap-2 md:w-[27rem] lg:w-[27.875rem]'>
                        <h4 className='text-[1.5rem] font-semibold'>Our Mission</h4>
                        <p className='text-justify text-[0.9rem]'>At Onile, our mission is deeply rooted in our unwavering commitment to transforming the real estate experience for our clients. We exist to be the guiding light in your real estate journey, working tirelessly to provide you with a level of service and expertise that goes beyond the transaction. Our mission is to redefine how real estate is perceived and navigated, offering a platform that empowers you with knowledge, choices, and confidence.</p>
                        <p className='text-justify text-[0.9rem]'>We are dedicated to setting new industry standards, consistently exceeding expectations, and prioritizing your needs and aspirations above all else. We endeavor to create an environment where the dream of finding the perfect home or achieving success in property investment becomes a vivid reality. <span className='text-red-500 hover:underline hover:shadow-lg'><Link href='/about_us'>Read More</Link></span></p>
                    </div>                    
                </section>
            </section>
        </section>
    </>
}

export default About


{/* <section className="w-[62.25rem] h-[20.9375rem] grid xl:grid-cols-2 gap-4 lg:gap-6 xl:gap-12"> */}

{/* <section className="w-[62.25rem] h-[20.9375rem] flex justify-center content-start gap-12">
                    <div className='flex justify-center'>
                        <Image src="/assets/about.png" alt='About us image' width={502} height={331} />
                    </div>
                    <div className='flex flex-col content-start gap-4 w-[27.875rem]'>
                        <h4 className='text-[1.5rem] font-semibold'>Our Mission</h4>
                        <p className='text-justify text-[0.9rem]'>At Onile, our mission is deeply rooted in our unwavering commitment to transforming the real estate experience for our clients. We exist to be the guiding light in your real estate journey, working tirelessly to provide you with a level of service and expertise that goes beyond the transaction. Our mission is to redefine how real estate is perceived and navigated, offering a platform that empowers you with knowledge, choices, and confidence.</p>
                        <p className='text-justify text-[0.9rem]'>We are dedicated to setting new industry standards, consistently exceeding expectations, and prioritizing your needs and aspirations above all else. We endeavor to create an environment where the dream of finding the perfect home or achieving success in property investment becomes a vivid reality. <span className='text-red-500 hover:underline hover:shadow-lg'><Link href='/about_us'>Read More</Link></span></p>
                    </div>                    
                </section> */}