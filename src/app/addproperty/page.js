import Link from 'next/link'
import Footer from "@/component/Footer";
import { IoIosImages } from "react-icons/io";

const AddProperty = () => {
    return <>
        <section className="scroll-smooth pt-[6.5rem] sm:pt-36 pb-0 flex w-full min-h-screen flex-col items-center mb-16">
            <section className='text-center text-[#344054]'>
                <h1 className='text-[1.5rem] lg:text-[2rem] font-bold text'>Post Ad</h1>
            </section>

            {/* Add Property Forms Begin */}
            <section className="flex flex-col gap-6 px-4 pt-2 pb-4 lg:px-20 lg:py-10 w-[20rem] sm:w-[35rem] md:w-[42rem] lg:w-[50rem] rounded-md border-[0.15rem] mt-4 text-[#344054]">

                {/* Property Details Begin */}
                <section className='flex flex-col gap-4'>
                    <section className=''>
                        <h3 className='text-lg sm:xl lg:text-2xl font-bold'>Property Details</h3>
                    </section>

                    <section className='grid sm:grid-cols-2 gap-2 sm:gap-4'>

                        <section className="col-span-1 sm:col-span-2">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="property-title"
                                    id="property-title"
                                    placeholder="Property Title"
                                    required
                                    autoComplete="property-title"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="property-type"
                                    id="property-type"
                                    placeholder="Property Type"
                                    required
                                    autoComplete="property-type"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="property-status"
                                    id="property-status"
                                    placeholder="Property Status"
                                    required
                                    autoComplete="property-status"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="number"
                                    name="bedrooms"
                                    id="bedrooms"
                                    placeholder="Bedrooms"
                                    required
                                    autoComplete="bedrooms"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="number"
                                    name="bathrooms"
                                    id="bathrooms"
                                    placeholder="Bathrooms"
                                    required
                                    autoComplete="bathrooms"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="number"
                                    name="square-footage"
                                    id="square-footage"
                                    placeholder="Square Footage"
                                    required
                                    autoComplete="square-footage"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="number"
                                    name="year-built"
                                    id="year-built"
                                    placeholder="Year Built"
                                    required
                                    autoComplete="year-built"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                    </section>

                </section>
                {/* Property Details End */}

                <hr />

                {/* Location Begin */}
                <section className='flex flex-col gap-4'>
                    <section className=''>
                        <h3 className='text-lg sm:xl lg:text-2xl font-bold'>Location</h3>
                    </section>
                    <section className='grid sm:grid-cols-2 gap-2 sm:gap-4'>

                        <section className="col-span-1 sm:col-span-2">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Address"
                                    required
                                    autoComplete="address"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="City"
                                    required
                                    autoComplete="city"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    placeholder="State"
                                    required
                                    autoComplete="state"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>
                    </section>
                </section>
                {/* Location Ends */}

                <hr />

                {/* Media Upload Begins */}
                <section className='flex flex-col gap-4'>
                    <section className=''>
                        <h3 className='text-lg sm:xl lg:text-2xl font-bold'>Media Upload</h3>
                    </section>

                    <section className='grid sm:grid-cols-2 gap-2 sm:gap-4'>
                        <section className="col-span-full">
                            <label className="w-full h-[10rem] md:h-[18rem] flex flex-col items-center justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide ring-gray-300 border cursor-pointer hover:bg-gray-200 hover:text-grey-200">
                                <IoIosImages className="text-[5rem] text:w-[8rem]" />
                                <span className="mt-2 text-base leading-normal">Upload Media</span>
                                <input type='file' className="hidden" />
                            </label>
                        </section>
                    </section>

                </section>
                {/* Media Upload Ends */}

                {/* Pricing Begin */}
                <section className='flex flex-col gap-4'>
                    <section className=''>
                        <h3 className='text-lg sm:xl lg:text-2xl font-bold'>Pricing</h3>
                    </section>
                    <section className='grid grid-cols-8 gap-2 sm:gap-4'>

                        <section className="col-start-1 col-end-3 md:col-end-2">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="currency"
                                    id="currency"
                                    placeholder="NGN"
                                    required
                                    autoComplete="currency"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-start-3 md:col-start-2 col-end-9">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    placeholder="Amount"
                                    required
                                    autoComplete="amount"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-full">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="additional_costs"
                                    id="additional_costs"
                                    placeholder="Additional Costs"
                                    required
                                    autoComplete="additional_costs"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>
                    </section>
                </section>
                {/* Pricing Ends */}

                {/* Amenities Starts */}
                <section className='flex flex-col gap-4'>
                    <section className=''>
                        <h3 className='text-lg sm:xl lg:text-2xl font-bold'>Amenities</h3>
                    </section>
                    <section className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3">
                        {/* Amenities Checkboxes */}
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="carpark" name="carpark" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="carpark" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Car Park</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="homeautomation" name="homeautomation" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="homeautomation" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Home Automation</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="cctv" name="cctv" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="cctv" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">CCTV Camera</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="furnished" name="furnished" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="furnished" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Furnished</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="garden" name="garden" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="garden" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Garden</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="storage" name="storage" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="storage" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Storage</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="backyard" name="backyard" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="backyard" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Backyard</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="gym" name="gym" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="gym" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Gym</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="homeoffice" name="homeoffice" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="homeoffice" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Home Office</label>
                        </section>
                        <section className="md:flex md:items-center md:gap-0.5 mt-1">
                            <input id="walkincloset" name="walkincloset" type="checkbox" className="accent-[#FF7F50] mr-1" />
                            <label htmlFor="walkincloset" className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]">Walk-In Closet</label>
                        </section>
                    </section>
                </section>
                {/* Amenities Ends */}

                {/* Contact Info Begin */}
                <section className='flex flex-col gap-4'>
                    <section className=''>
                        <h3 className='text-lg sm:xl lg:text-2xl font-bold'>Contact Information</h3>
                    </section>
                    <section className='grid sm:grid-cols-2 gap-2 sm:gap-4'>

                        <section className="col-span-1 sm:col-span-2">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="Full Name"
                                    required
                                    autoComplete="full-name"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>

                        <section className="col-span-1">
                            <section className="mt-0">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="Phone Number"
                                    required
                                    autoComplete="phone-number"
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>
                    </section>
                </section>
                {/* Contact Info Ends */}

                {/* Description Begin */}
                <section className='flex flex-col gap-2'>
                    <section className=''>
                        <h3 className='text-lg sm:xl lg:text-2xl font-bold'>Description</h3>
                    </section>
                    <section className='grid grid-cols-1'>
                        <section className="col-span-full">
                            <p className="text-[1rem] text-[#34405480] text-right">0/400 Words</p>
                            <section className="mt-2">
                                <textarea
                                id="message"
                                name="message"
                                placeholder="Property Description"
                                required
                                rows={10}
                                className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>

                            <section className="md:flex md:items-center md:gap-0.5 mt-1">
                                <input
                                id="check"
                                name="t&c"
                                type="checkbox"
                                className="accent-[#FF7F50] mr-1"
                                />
                                <label
                                htmlFor="check"
                                className="text-xs sm:text-sm font-medium text-justify leading-0 text-[#344054B2]"
                                >
                                Do you agree to all the <Link href="terms&conditions" className="font-semibold text-[#FF7F50] hover:text-[#fc6832] hover:underline">terms and conditions</Link> given by Onile on this given property.
                                </label>
                            </section>
                        </section>
                    </section>
                </section>
                {/* Description Ends */}

                {/* Submit Button Starts */}
                <section className="w-full">
                    <button type="submit" className="flex w-full justify-center rounded-md bg-[#FF7F50] px-3 py-2 md:py-2.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#fc6832] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fc6832]">
                        Submit
                    </button>
                </section>
                {/* Submit Button Ends */}


            </section>
            {/* Add property forms end */}
        </section>


        <Footer />
    </>
  }
  
  export default AddProperty