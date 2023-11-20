"use client";

import Image from 'next/image'


const Hero = () => {
  return (
    <>
    {/* You may want to work on the range of this screen sizes for the parent container min-[641px]:h-[50rem] max-[831px]:h-[60rem]  */}
    <section 
        style={{backgroundImage: `url('/assets/hero_bg.gif')`, backgroundSize: 'cover'}}
        className="pt-4 sm:pt-36 w-full h-[44rem] sm:h-[50rem] md:h-[53rem] lg:h-[53rem] xl:h-[46rem] flex flex-col sm:flex-row justify-start">
        <div className="w-full px-8 pt-28 sm:px-0 sm:py-0 sm:basis-1/2 sm:mx-16 sm:my-[3.95rem] lg:mx-16">
            <h1 className="text-[#F2F4F7] text-[2rem] sm:text-[3rem] mb-2 font-bold">Your Dream Awaits</h1>
            <p className="text-[#F2F4F7] text-[1.2rem] sm:text-[1.5rem] mb-[0.75rem]">Realize Your Homeownership Goals</p>
            <p className="lg:w-4/5 text-[#F2F4F7] text-[0.7rem] sm:text-[0.9rem] text-justify">Welcome to the world of exquisite real estate, where luxury meets lifestyle. Explore a curated collection of exceptional properties that redefine the art of living.</p>
            <button className="text-[#FFFFFF] text-[1rem] sm:text-[1.2rem] font-semibold px-[2rem] py-[0.6rem] my-[0.8rem] rounded-xl bg-[#FF7F50] hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                Explore Now
            </button>
            <div className='bg-white rounded-t-xl h-[2.5rem] sm:h-[3rem] w-[14rem] flex mt-6'>
                <div className="text-[#FFFFFF] text-[1rem] bg-[#FF7F50] h-full w-1/2 flex flex-col justify-center text-center rounded-tl-xl">
                    For Rent
                </div>
                <div className='text-[#344054] text-[1rem] bg-white h-full w-1/2 flex flex-col justify-center text-center rounded-tr-xl'>
                    For Sale
                </div>
            </div>

            <div className='w-full h-[12rem] xl:h-24 bg-white rounded-tr-md rounded-b-md px-4 flex flex-col justify-center '>
                <div className="grid grid-cols-[repeat(3, minmax(0, 1fr))_2.5rem] gap-2">
                    <div className="xl:col-span-1 xl:col-start-1 flex">
                        <div className="w-full">
                            <input type="text" name="location" id="location" placeholder="Location" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-[#FF7F50] sm:text-sm sm:leading-6" />
                        </div>
                        <Image src="/assets/location.svg" alt='location' width={16} height={16} className='-ml-6 mt-1' />
                    </div>
                    <div className="xl:col-span-1 xl:col-start-2 flex">
                        <div className="w-full">
                            <input type="text" name="property_type" id="property_type" placeholder="Property Type" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-[#FF7F50] sm:text-sm sm:leading-6" />
                        </div>
                        <Image src="/assets/property.svg" alt='property_type' width={16} height={16} className='-ml-6 mt-1' />
                    </div>
                    <div className="xl:col-span-1 xl:col-start-3 flex">
                        <div className="w-full">
                            <input type="text" name="price_range" id="price_range" placeholder="Price Range" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 placeholder:pl-2 focus:ring-2 focus:ring-inset focus:ring-[#FF7F50] sm:text-sm sm:leading-6" />
                        </div>
                        <Image src="/assets/price.svg" alt='price_range' width={16} height={16} className='-ml-6 mt-1' />
                    </div>
                    <button className="xl:col-[2.5rem] xl:col-start-4 h-[2.28rem] text-[#FFFFFF] rounded-md xl:rounded-r-xl xl:rounded-l-none bg-[#FF7F50] hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                        <div className='flex justify-center'>
                            <Image src="/assets/search.svg" alt='Search' width={16} height={16} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero