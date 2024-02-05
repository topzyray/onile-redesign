import Footer from "@/component/Footer"
import Link from 'next/link'
import Image from 'next/image'
import { VscChevronLeft } from 'react-icons/vsc'
import { VscChevronRight } from 'react-icons/vsc'
import { BsBookmarkCheck } from 'react-icons/bs'
import { BsShare } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineBed } from "react-icons/md"
import { MdOutlineBathtub } from "react-icons/md"
import LandPlot from '/public/assets/land-plot.svg'

import Card from "@/component/Card"
import house1 from "/public/assets/house7.jpg"
import house2 from "/public/assets/house2.jpg"
import house3 from "/public/assets/house11.jpg"
import house4 from "/public/assets/house4.jpg"

const PropertyDetails = ({ params }) => {
    return <>
        <section className="scroll-smooth pt-[6.5rem] sm:pt-36 pb-0 flex w-full min-h-screen flex-col items-center mb-16">
            <section className="w-full flex flex-col gap-4 px-8 sm:px-16 lg:px-[8.44rem] space-y-4 md:space-y-8">
                {/* Navigation */}
                <section className='flex items-center gap-4 text-dark-gray'>
                    <Link href="/properties" className="">
                        <VscChevronLeft className="w-8 h-8 hover:text-[#fc6832] focus:text-[#fc6832]" />
                    </Link>
                    <p className='font-normal text-sm sm:text-base'>Properties {'>'} For Sale {'>'} Two Bedrooms</p>
                </section>

                {/* Property info */}
                <section className="flex flex-col gap-4 sm:flex-row justify-between">
                    <div className="text-dark-gray space-y-2 sm:space-y-4">
                        <h3 className="text-[1.5rem] sm:text-[2rem] font-semibold leading-6 md:leading-8">Two Bedroom Smarthome</h3>
                        <p className="flex items-center gap-2 font-normal text-sm sm:text-base leading-4"><span><IoLocationOutline className='text-light-orange w-6 h-6' /></span> 456 Adegbola Avenue, Fajuyi, Ekiti</p>
                        <p className="flex items-center gap-3 font-normal text-sm sm:text-base leading-4"><span className="flex items-center gap-2"><MdOutlineBed className='text-light-orange w-6 h-6' />Two Bedrooms</span> <span className="flex items-center gap-2"><MdOutlineBathtub className='text-light-orange w-6 h-6' />Two Bathrooms</span> <span className="flex items-center gap-2"><Image src={LandPlot} alt="Land plot icon" className='w-6 h-6' />43000 sq.ft</span></p>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-between sm:justify-start sm:items-end space-y-2 sm:space-y-4">
                        <h3 className="text-light-orange text-[1.5rem] sm:text-[2rem] font-semibold leading-8">₦3,500,000</h3>
                        <p className='flex gap-6 text-dark-gray'>
                            <span><BsShare className='w-6 h-6 sm:w-8 sm:h-8' /></span>
                            <span><BsBookmarkCheck className='w-6 h-6 sm:w-8 sm:h-8' /></span>
                        </p>
                    </div>
                </section>

                {/* Property images carousel */}
                <section
                    // bg-[url('/assets/house7.jpg')] bg-cover bg-center
                    className="relative flex justify-center items-center w-full h-[25rem] sm:h-[35rem] md:h-[40rem] xxl:h-[49.9rem] border-2 rounded-xl">
                    <Image src={house1} alt="" className="absolute w-full h-full object-cover object-center opacity-50 rounded-xl" />
                    <Image src={house1} alt="" className="absolute w-[70%] h-[75%] sm:w-[65%] sm:h-[70%] object-cover object-center opacity-100 rounded-xl" />
                    <section className='absolute top-[50%] w-full flex justify-between px-2 sm:px-4 text-dark-gray'>
                        <span className="flex justify-center items-center w-9 sm:w-10 h-10 rounded-xl shadow-xl border bg-white font-bold hover:bg-dark-orange hover:text-dark-gray focus:bg-dark-orange cursor-pointer">
                            <VscChevronLeft className="w-8 h-8" />
                        </span>
                        <span className="flex justify-center items-center w-10 h-10 rounded-xl shadow-xl border bg-white font-bold hover:bg-dark-orange hover:text-dark-gray focus:bg-dark-orange cursor-pointer">
                            <VscChevronRight className="w-8 h-8" />
                        </span>
                    </section>
                </section>

                {/* Property details, location and contact */}
                <section className="text-dark-gray flex flex-1 flex-col md:flex-row sm:justify-between gap-8 md:gap-4">
                    {/* Details */}
                    <section className="flex flex-col gap-6 sm:gap-4 md:w-1/2">
                        {/* Description */}
                        <section className="">
                            <h3 className="text-[1.5rem] sm:text-[2rem] font-bold leading-6 md:leading-8 mb-3 sm:mb-4">Description</h3>
                            <p className="text-sm sm:text-base text-justify font-normal leading-4">Nestled in a vibrant neighborhood, this residence offers an elegant blend of modern luxury and timeless charm. As you step inside, a bright and spacious living area welcomes you, providing a perfect setting for relaxation or entertaining. The open-concept kitchen, equipped with high-end appliances and stylish finishes, beckons the inner chef in you. The master bedroom is a retreat of tranquility, featuring large windows that flood the room with natural light. The second bedroom offers versatility, whether for guests or as a home office, to suit your needs. <br /> <br /> This property boasts an expansive outdoor space, ideal for unwinding or hosting gatherings. With meticulously maintained gardens and a stunning view, it's a true sanctuary.</p>
                        </section>
                        {/* Overview */}
                        <section className="w-full lg:w-[25.8rem] max-w-[25rem]">
                            <h3 className="text-[1.5rem] sm:text-[2rem] font-bold leading-6 md:leading-8 mb-3 sm:mb-4">Overview</h3>
                            <section className="bg-[#F3F4F5] flex rounded-lg py-5 sm:py-10 px-2.5 sm:px-5 gap-12 md:gap-[4rem] lg:gap-[5.3rem]">
                                <section className="space-y-4 lg:space-y-6">
                                    <p className="text-sm font-semibold">Property ID: <span className="font-normal">944738</span></p>
                                    <p className="text-sm font-semibold">Property Type: <span className="font-normal">House</span></p>
                                    <p className="text-sm font-semibold">Price: <span className="font-normal">₦3,500,000</span></p>
                                    <p className="text-sm font-semibold">Size: <span className="font-normal">4300 sq.ft</span></p>
                                    <p className="text-sm font-semibold">Year Built: <span className="font-normal">30-06-2023</span></p>
                                    <p className="text-sm font-semibold">Bedrooms: <span className="font-normal">2</span></p>
                                </section>
                                <section className="space-y-4 lg:space-y-6">
                                    <p className="text-sm font-semibold">Bathrooms: <span className="font-normal">3</span></p>
                                    <p className="text-sm font-semibold">Garages: <span className="font-normal">1</span></p>
                                    <p className="text-sm font-semibold">Status: <span className="font-normal">For Sale</span></p>
                                    <p className="text-sm font-semibold">Security Systems: <span className="font-normal">Yes</span></p>
                                </section>
                            </section>
                        </section>
                        {/* Amenities */}
                        <section>
                            <h3 className="text-[1.5rem] sm:text-[2rem] font-bold leading-6 md:leading-8 mb-3 sm:mb-4">Amenities</h3>
                            <section className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3 space-y-3 md:space-y-4">
                                {/* Amenities Checkboxes */}
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="carpark" name="carpark" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="carpark" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Car Park</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="homeautomation" name="homeautomation" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="homeautomation" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Home Automation</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="cctv" name="cctv" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="cctv" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">CCTV Camera</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="furnished" name="furnished" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="furnished" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Furnished</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="garden" name="garden" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="garden" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Garden</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="storage" name="storage" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="storage" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Storage</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="backyard" name="backyard" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="backyard" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Backyard</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="gym" name="gym" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="gym" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Gym</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="homeoffice" name="homeoffice" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="homeoffice" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Home Office</label>
                                </section>
                                <section className="flex justify-start items-center md:gap-0.5 mt-1">
                                    <input id="walkincloset" name="walkincloset" type="checkbox" className="accent-[#FF7F50] mr-1" />
                                    <label htmlFor="walkincloset" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Walk-In Closet</label>
                                </section>
                            </section>
                        </section>
                    </section>

                    {/* Contact and Location */}
                    <section className="flex flex-col-reverse md:flex-col gap-4 space-y-8">
                        {/* Contact Forms */}
                        <section className="w-full lg:w-[23.1rem] xl:w-[30rem] min-w-[20rem] max-w-[30rem] rounded-md border-[0.15rem] px-6 py-4 lg:px-8 xl:px-20 lg:py-5">
                            {/* Contact Details */}
                            <section className="space-y-4 mb-4">
                                <h3 className="text-[1.5rem] sm:text-[2rem] font-bold leading-6 md:leading-8 mb-3 sm:mb-4">Contact Me</h3>
                                <p className="text-sm text-justified font-normal leading-5">Feel free to contact us and make enquiries on this property</p>
                            </section>
                            <section className="grid grid-cols-1">
                            <section className="col-span-1">
                                <section className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    required
                                    autoComplete="name"
                                    className="bg-white block w-full rounded-sm border-0 py-2.5 text-[#344054] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-base sm:leading-6"
                                />
                                </section>
                            </section>

                            <section className="col-span-1">
                                <section className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-sm border-0 py-2.5 text-[#344054] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-base sm:leading-6"
                                />
                                </section>
                            </section>

                            <section className="col-span-1">
                                <section className="mt-2">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                    required
                                    autoComplete="phone-number"
                                    className="block w-full rounded-sm border-0 py-2.5 text-[#344054] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-base sm:leading-6"
                                />
                                </section>
                            </section>
                            </section>

                            {/* Message Body */}
                            <section className="col-span-full">
                                <section className="mt-2">
                                    <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    rows={5}
                                    className="block w-full rounded-sm border-0 py-1.5 text-[#344054] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-base sm:leading-6"
                                    />
                                </section>
                            </section>

                            {/* Submit button */}
                            <section className="mt-2 col-span-full">
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-[#FF7F50] px-3 py-2.5 text-sm sm:text-base lg:text-lg font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                >
                                    Send Message
                                </button>
                            </section>
                        </section>

                        {/* Location */}
                        <section className="w-full lg:w-[23.1rem] xl:w-[30rem] min-w-[20rem] max-w-[30rem] rounded-md">
                            <section className="">
                                <h3 className="text-[1.5rem] sm:text-[2rem] font-bold leading-6 md:leading-8 mb-3 sm:mb-4">Location</h3>
                            </section>
                            <section className="h-[18.8rem] md:h-[30rem] xl:h-[25rem] xxl:h-[22.8rem] max-h-[50rem] rounded-2xl">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126547.21974131359!2d5.1391946158631585!3d7.618361213710919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047fad09891a07d%3A0xf38552cbf4615400!2sAdo%20Ekiti%2C%20Ekiti!5e0!3m2!1sen!2sng!4v1707062561992!5m2!1sen!2sng" 
                                    className="w-full h-[100%] border-0 objec-fit"
                                    allowFullScreen="" 
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </section>
                        </section>
                    </section>

                </section>

                {/* View similar properties */}
                <section className="">
                    <h3 className="text-[1.5rem] text-dark-gray sm:text-[2rem] font-bold leading-6 md:leading-8 mb-3 sm:mb-4">View Similar Properties</h3>
                    <section className="flex flex-wrap justify-center gap-5 border rounded-lg">
                        <Card
                            imageUrl={house1}
                            altText="Image of Property 1"
                            title="Modern 3 Bedroom Duplex"
                            location="123, Olayinka Street, Ado Ekiti."
                            size="2300 sq.ft"
                            price="489,000"
                        />
                        <Card
                            imageUrl={house2}
                            altText="Image of Property 2"
                            title="Modern 4 Bedroom Duplex"
                            location="47, Bamisile Avenue, Ikere Ekiti."
                            size="5045 sq.ft"
                            price="420,900"
                        />
                        <Card
                            imageUrl={house3}
                            altText="Image of Property 3"
                            title="Modern 3 Bedroom Flat"
                            location="222, Akinloye Close, Are Ekiti."
                            size="1500 sq.ft"
                            price="350,500"
                        />
                        <Card
                            imageUrl={house4}
                            altText="Image of Property 4"
                            title="Modern 2 Bedroom Bungalow"
                            location="22, Paul and Joshua Lane, Ado Ekiti"
                            size="4300 sq.ft"
                            price="600,000"
                        />
                    </section>
                </section>

            </section>
        </section>

        <Footer />
    </>
}

export default PropertyDetails


const PropertyImages = [house1, house2, house3, house4]