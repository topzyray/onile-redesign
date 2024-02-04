import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import Link from "next/link";


const Verification = () => {
    return <>
      <section className="scroll-smooth pt-[6.5rem] sm:pt-32 pb-16 flex w-full min-h-screen flex-col items-center">
        <section className="w-full px-8 sm:px-16 lg:px-[9rem]">
           <Link href="/register">
            <VscChevronLeft className="w-10 h-10 hover:text-[#fc6832] focus:text-[#fc6832]" />
           </Link> 
        </section>
        <section className="w-auto h-auto flex justify-center items-center mt-8 sm:mt-[6.31rem]">
            <section className="border-2 rounded-2xl px-10 py-8 mx-4 md:mx-0 space-y-4 flex flex-col items-center">
                <section className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-[#344054] text-2xl font-semibold leading-[1.65rem] tracking-tight">
                        Verification
                    </h2>
                </section>

                <section className="sm:mx-auto sm:w-full sm:max-w-[14.8124rem]">
                    <p className="text-center text-[#344054] text-xs font-normal">
                        Enter the verification code sent to your email to complete your account setup
                    </p>
                </section>

                <section className="flex flex-col">
                    <section className="w-[13rem] h-10 mt-2 grid grid-cols-4 grid-rows-1 place-content-center gap-4">
                        <input
                        type="text"

                        className="block w-10 h-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                        />
                        <input
                        type="text"

                        className="block w-10 h-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                        />
                        <input
                        type="text"

                        className="block w-10 h-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                        />
                        <input
                        type="text"

                        className="block w-10 h-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                        />
                    </section>
                    <section className="text-right">
                        <Link
                            href="/resend_OTP"
                            className="font-normal text-[#FF7F50] text-xs hover:text-[#fc6832] hover:underline"
                            >
                            Resend Code
                        </Link>
                    </section>
                </section>

                <section className="w-full">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#FF7F50] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#fc6832] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fc6832]"
                  >
                    Verify
                  </button>
                </section>
            </section>    
        </section>
      </section>




      
    </>
}

export default Verification;