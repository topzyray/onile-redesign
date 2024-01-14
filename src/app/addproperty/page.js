import Image from 'next/image'
import media from '/public/assets/media_upload.svg'
import Footer from "@/component/Footer";

const AddProperty = () => {
    return <>
        <section className="scroll-smooth pt-[6.5rem] sm:pt-36 pb-16 lg:pb-0 flex w-full min-h-screen flex-col items-center mb-16">
            <section className='text-center text-[#344054]'>
                <h1 className='text-[1.5rem] lg:text-[2rem] font-bold text'>Post Ad</h1>
            </section>

            {/* Add Property Forms Begin */}
            <section className="flex flex-col gap-6 px-4 py-2 lg:px-20 lg:py-10 w-[20rem] sm:w-[35rem] md:w-[42rem] lg:w-[50rem] rounded-md border-[0.15rem] mt-4 text-[#344054]">

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

                        <section className="col-span-1 sm:col-span-2">
                            <section className="mt-0 flex flex-col gap-2">
                                <section className='h-40 md:h-72 rounded-md border flex justify-center items-center shadow-md'>
                                    <Image src={media} alt='Media Upload' className='w-24 h-24 md:w-32 md:h-32' />
                                </section>
                                <input
                                    type="file"
                                    name="media-upload"
                                    id="media-upload"
                                    accept=".png, .jpg, .jpeg"
                                    multiple
                                    required
                                    className="block w-full rounded-md border-0 py-2 md:py-2.5 text-[#344054] shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                                />
                            </section>
                        </section>
                    </section>

                </section>
                {/* Media Upload Ends */}




            </section>
            {/* Add property forms end */}
        </section>


        <Footer />
    </>
  }
  
  export default AddProperty