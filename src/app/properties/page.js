"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/component/Card";
import house1 from "/public/assets/house7.jpg";
import house2 from "/public/assets/house2.jpg";
import house3 from "/public/assets/house11.jpg";
import house4 from "/public/assets/house4.jpg";
import Footer from "@/component/Footer";
import { CgAdd } from "react-icons/cg";

const Properties = () => {
  const [searchProperty, setSearchProperty] = useState("");

  const handleChange = (event) => {
    setSearchProperty(event.target.value)
  }

  const handleSubmit = () => {
    alert("Searching....")
    setSearchProperty("")
  }

  return (
    <>
      <section className="pt-20 sm:pt-[6.5rem] flex w-full min-h-screen flex-col items-center justify-between">
        <section className="w-full flex flex-col">
          {/* Search field on top */}
          <section className="bg-[#F3F4F5] w-full py-8 px-8 lg:px-[21.78rem]">
            <section className="flex justify-center gap-1 h-10">
              <section className="shrink-0">
                <input
                  type="search"
                  name="search"
                  value={searchProperty}
                  onChange={handleChange}
                  placeholder="Looking for anything"
                  autoComplete="search"
                  className="block w-[13rem] sm:w-[20rem] md:w-[30rem] lg:w-[40.3125rem] h-full rounded-l-md border-0 py-1 md:py-1.5 text-[#34405480] ring-1 ring-inset ring-[#BDBDBD] placeholder:text-[#BDBDBD] placeholder:font-normal placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-[#FF7F50] sm:text-sm sm:leading-6 shadow-md"
                  style={{boxShadow: "2px 2px 2px 0px #1d293940"}}
                />
              </section>
              <button onClick={handleSubmit} className="h-full shrink-0 font-normal sm:font-semibold text-sm md:py-2 px-6 rounded-r-md text-[#FFFFFF] bg-[#FF7F50] hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300" style={{boxShadow: "2px 2px 2px 0px #1d293940"}}>
                Search
              </button>
            </section>
          </section>

          {/* Purchase guide and Sell */}
          <section className="flex justify-center md:gap-2 w-full h-[8rem] md:h-[10.375rem] px-8 sm:px-16 lg:px-[8.44rem]">
            <section
              style={{
                backgroundImage: `url('/assets/bg_property_guide.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full flex flex-col justify-center pl-0 md:pl-[4.37rem] rounded-l-md md:rounded-l-2xl"
            >
              <h1 className="text-[#F2F4F7] text-[1.5rem] md:text-[2.5rem] text-center md:text-left font-semibold">
                How to buy on Onile
              </h1>
              <Link
                href="/guide"
                className="text-xl text-center md:text-left md:text-2xl text-[#FF7F50] underline font-semibold hover:text-orange-300"
              >
                Click Here
              </Link>
            </section>
            <section className="bg-[#00B3D1] text-center text-[#F2F4F7] w-[17rem] sm:w-[20rem] rounded-r-md md:rounded-r-2xl py-1 px-1 sm:py-4 sm:px-4 md:py-6 md:px-6 inline-flex flex-col justify-center content-center">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
                Ready to sell your property?
              </p>
              <div>
                <Link href="/addproperty" className="flex justify-center items-center">
                  <CgAdd className="w-8 h-8 md:w-10 md:h-10 md:my-1 text-center hover:shadow-lg hover:shadow-white hover:text-[#00B3D1] hover:bg-[#F2F4F7] hover:rounded-lg" />
                </Link>
              </div>
              <p className="text-xs sm:text-base font-normal">
                List your property today!
              </p>
            </section>
          </section>

          {/* Available properties */}
          <section className="w-full px-8 sm:px-16 lg:px-[8.44rem] py-8">
            <section className="flex flex-wrap justify-center gap-5">
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
            <section className="flex justify-center mt-10 text-[#FF7F50] font-semibold">
              <Link href="/properties" className=" hover:underline">
                See more
              </Link>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Properties;
