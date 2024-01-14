"use client";

import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/app/_lib/useIsVisible";

const Service = ({ imageUrl, title, text }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <>
      <section
        ref={ref}
        className={`flex flex-col content-center gap-3 rounded-t-xl w-[19rem] sm:w-[23.125rem] lg:w-[19rem] xl:w-[23.125rem] h-[26rem] sm:h-[28.9375rem] lg:h-[26rem] xl:h-[28.9375rem] border border-solid border-[#CECECE]   transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <section>
          <Image
            src={imageUrl}
            alt="Card Image"
            width={370}
            height={334}
            className="rounded-t-lg object-cover"
          />
        </section>

        <section className="flex flex-col px-2 gap-2 text-[#344054] text-center">
          <h4 className="text-xl lg:text-2xl font-medium">{title}</h4>
          <p className="text-sm font-normal">{text}</p>
        </section>
      </section>
    </>
  );
};

const Services = () => {
  return (
    <>
      <section className="bg-[#F3F4F5] w-full flex justify-center py-8">
        <section className="flex flex-col gap-6">
          <section className="text-center">
            <h1 className="text-[#344054] text-[1.5rem] md:text-[2rem] font-bold">
              Our Services
            </h1>
          </section>
          <section className="grid lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-10">
            <Service
              imageUrl="/assets/services_property.png"
              title="Property Listing"
              text="Explore a sectionerse portfolio of meticulously curated properties, from contemporary condos to sprawling estates."
            />
            <Service
              imageUrl="/assets/services_agents.png"
              title="Expert Agents"
              text="Connect with knowledgeable real estate professionals who understand your unique needs and preferences."
            />
            <Service
              imageUrl="/assets/services_mortgage.png"
              title="Mortgage Assistance"
              text="Access resources and guidance for securing your dream home through mortgage assistance programs."
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default Services;
