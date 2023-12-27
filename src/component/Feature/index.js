"use client";

import Card from '../Card/index.js'
import house1 from '/public/assets/house7.jpg'
import house2 from '/public/assets/house2.jpg'
import house3 from '/public/assets/house11.jpg'
import house4 from '/public/assets/house4.jpg'


const Feature = () => {

  return <>
    <section className='bg-white w-full flex justify-center py-8' id="feature">
      <section className='flex flex-col gap-6'>
          <section className='text-center'>
              <h1 className='text-[#344054] text-[1.5rem] md:text-[2rem] font-bold'>Featured Listing</h1>
          </section>
          <section className="flex flex-wrap justify-center gap-5">
              <Card imageUrl={house1} altText="Image of Property 1" title="Modern 3 Bedroom Duplex" location="123, Olayinka Street, Ado Ekiti." size="2300 sq.ft" price="N 489,000" />
              <Card imageUrl={house2} altText="Image of Property 2" title="Modern 4 Bedroom Duplex" location="47, Bamisile Avenue, Ikere Ekiti." size="5045 sq.ft" price="N 420,900" />
              <Card imageUrl={house3} altText="Image of Property 3" title="Modern 3 Bedroom Flat" location="222, Akinloye Close, Are Ekiti." size="1500 sq.ft" price="N 350,500" />
              <Card imageUrl={house4} altText="Image of Property 4" title="Modern 2 Bedroom Bungalow" location="22, Paul and Joshua Lane, Ado Ekiti" size="4300 sq.ft" price="N 600,000" />
          </section>
      </section>
    </section>
  </>
}

export default Feature


{/* <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 flex-wrap justify-center content-center"> */}