"use client";

import { useState } from "react";
import Image from "next/image";
import phone from "/public/assets/icons_phone.svg";
import mail from "/public/assets/icon_mail.svg";
// import Footer from "@/component/Footer";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setContact(prevContact => ({...prevContact, [name]: value}))
  };

  const handleSubmit = () => {
    alert("Thank you for contacting us.");
    setContact({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  };

  return (
    <>
      <section className="scroll-smooth pt-[6.5rem] sm:pt-32 pb-16 lg:pb-0 flex w-full min-h-screen flex-col items-center">
        <section className="text-center text-[#344054]">
          <h1 className="text-[1.5rem] lg:text-[2rem] font-bold">Contact Us</h1>
        </section>
        <section className="pt-6 lg:px-8 flex flex-col lg:flex-row justify-center gap-6 lg:gap-4 xl:gap-6">
          {/* Contact Info */}
          <section className="flex flex-col justify-center gap-6 w-[21.25rem] sm:w-[30rem] lg:w-[18rem] xl:w-[21.25rem] h-[28.5625rem] rounded-md p-8 shadow-md text-[#344054]">
            <section className="flex gap-4">
              <Image src={phone} alt="Call to us" className="w-10 h-10" />
              <h4 className="text-lg font-semibold flex flex-col justify-center">
                Call To Us
              </h4>
            </section>
            <section className="text-[0.875rem] flex flex-col gap-2">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +23480333-ONILE</p>
            </section>

            <hr />

            <section className="flex gap-4">
              <Image src={mail} alt="Call to us" className="w-10 h-10" />
              <h4 className="text-lg font-semibold flex flex-col justify-center">
                Mail To Us
              </h4>
            </section>
            <section className="text-[0.875rem] flex flex-col gap-2">
              <p>
                Fill out our form and we will contact you <br /> within 24 hours
              </p>
              <p className="font-semibold text-center">Or</p>
              <p>Email: customer@onile.com</p>
              <p>Email: support@onile.com</p>
            </section>
          </section>

          {/* Contact Forms */}
          <section className="sm:w-[30rem] lg:w-[42rem] xl:w-[50rem] h-[29.5rem] sm:h-[34rem] lg:h-[28.5625rem] rounded-md border-[0.15rem] p-6 sm:p-8">
            {/* Contact Details */}
            <section className="grid lg:grid-cols-3 lg:gap-4 lg:mb-4">
              <section className="col-span-1">
                <section className="mt-2">
                  <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    id="name"
                    placeholder="Your Name"
                    required
                    autoComplete="name"
                    className="bg-[#F5F5F5] block w-full rounded-sm border-0 py-2.5 text-[#344054] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                  />
                </section>
              </section>

              <section className="col-span-1">
                <section className="mt-2">
                  <input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Your Email"
                    required
                    autoComplete="email"
                    className="bg-[#F5F5F5] block w-full rounded-sm border-0 py-2.5 text-[#344054] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                  />
                </section>
              </section>

              <section className="col-span-1">
                <section className="mt-2">
                  <input
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    id="phone"
                    placeholder="Your Phone"
                    required
                    autoComplete="phone-number"
                    className="bg-[#F5F5F5] block w-full rounded-sm border-0 py-2.5 text-[#344054] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
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
                  value={contact.message}
                  onChange={handleChange}
                  placeholder="Input your message here..."
                  required
                  rows={10}
                  className="bg-[#F5F5F5] block w-full rounded-sm border-0 py-1.5 text-[#344054] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#344054] text-sm sm:text-lg sm:leading-6"
                />
              </section>
            </section>

            {/* Submit button */}
            <section className="mt-2 lg:mt-4 flex justify-end">
              <button
                type="submit"
                onClick={handleSubmit}
                className="rounded-md bg-[#FF7F50] px-3 py-2.5 text-sm sm:text-base lg:text-lg font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Send Message
              </button>
            </section>
          </section>
        </section>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Contact;
