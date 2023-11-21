"use client";

import Card from '../Card/index.js'


const Feature = () => {

  return <>
    <section className='bg-white w-full flex justify-center py-8'>
      <section className='flex flex-col gap-6'>
          <section className='text-center'>
              <h1 className='text-[#344054] text-[1.5rem] md:text-[2rem] font-bold'>Featured Listing</h1>
          </section>
          <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
              <Card className="ease-in duration-500" />
              <Card />
              <Card />
              <Card />
          </section>
      </section>
    </section>
  </>
}

export default Feature