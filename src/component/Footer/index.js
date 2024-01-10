"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Footer = () => {
  const [newsletter, setNewsletter] = useState("");

  const handleChange = (event) => {
    setNewsletter(event.target.value);
  };

  const handleClick = () => {
    setNewsletter("");
    alert("Submitted successfully.");
  };

  // Pathname is for tracking active links
  const pathname = usePathname();

  return (
    <>
      <section className="w-full h-auto shadow-lg bg-[#1D2939] text-[#F2F4F7] pt-8 pb-8 lg:pt-20 lg:pb-0 px-4 md:px-10 xl:px-32">
        <section className="grid place-items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 grid-rows-2 gap-4 sm:gap-6 lg:gap-0 font-semibold">
          <section className="lg:row-start-1 lg:col-start-1 lg:col-span-6">
            <h4 className="pb-2 text-base font-bold sm:mb-4">
              Join Our Newsletter
            </h4>
            <p className="pb-2 text-sm font-normal sm:mb-3">
              Receive Onile latest updates in your inbox
            </p>
            <div className="flex gap-1">
              <div className="shrink-0">
                <input
                  type="email"
                  name="email"
                  value={newsletter}
                  onChange={handleChange}
                  id="email"
                  placeholder="Email address"
                  autoComplete="email"
                  className="block min-w-[10rem] lg:w-60 rounded-md border-0 py-1 md:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 placeholder:font-normal placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-[#FF7F50] sm:text-sm sm:leading-6"
                />
              </div>
              <button onClick={handleClick} className="shrink-0 font-normal sm:font-semibold text-sm md:py-2 px-3 rounded-md text-[#FFFFFF] bg-[#FF7F50] hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                Sign Up
              </button>
            </div>
          </section>

          <section className="lg:row-start-1 lg:col-span-2 lg:text-center h-[5rem]">
            <h4 className="text-base font-semibold mb-4">Explore</h4>
            <ul className="text-sm font-normal">
              <Link
                href="/archives"
                className={
                  pathname === "/archives"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">Archives</li>
              </Link>
              <Link
                href="/buy"
                className={
                  pathname === "/buy"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">Buy Properties</li>
              </Link>
              <Link
                href="/calc"
                className={
                  pathname === "/calc"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">Mortgage Calculator</li>
              </Link>
            </ul>
          </section>

          <section className="lg:row-start-1 lg:col-span-2 lg:text-center">
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm font-normal">
              <Link
                href="/about"
                className={
                  pathname === "/about"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">About Us</li>
              </Link>
              <Link
                href="/contact"
                className={
                  pathname === "/contact"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">Contact Us</li>
              </Link>
              <Link
                href="/faq"
                className={
                  pathname === "/faq"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">Frequently Asked Questions</li>
              </Link>
            </ul>
          </section>

          <section className="lg:row-start-1 lg:col-span-2 lg:text-center">
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="text-sm font-normal">
              <Link
                href="/news"
                className={
                  pathname === "/news"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">News</li>
              </Link>
              <Link
                href="/glossary"
                className={
                  pathname === "/glossary"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">Glossary</li>
              </Link>
              <Link
                href="/guide"
                className={
                  pathname === "/guide"
                    ? "text-[#FF7F50] font-bold"
                    : "hover:underline hover:font-bold"
                }
              >
                <li className="sm:mb-3">Purchase Guide</li>
              </Link>
            </ul>
          </section>

          <section className="lg:row-start-2 col-span-full text-center place-self-center">
            <p className="text-xs font-light">
              © 2023, Onile.com, Inc. or its affiliates
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
