import Link from "next/link";
import faqs from "../_lib/faqs";
import Footer from "@/component/Footer";

const FAQ = () => {
    return <>
      <section className="text-[#344054] pt-[6.5rem] sm:pt-32 pb-16  flex w-full min-h-screen flex-col items-center justify-between">
        <section className="w-full space-y-6 px-8 sm:px-16 lg:px-[8.44rem]">
          <section className='text-center'>
            <h1 className='text-[1.5rem] md:text-[2rem] font-bold'>Frequently Asked Questions</h1>
          </section>

          {/* Search FAQ */}
          <section className="w-full px-8 lg:px-[21.78rem]">
            <section className="flex justify-center gap-1 h-10">
              <section className="shrink-0">
                <input
                  type="search"
                  name="search"
                  placeholder="Looking for anything"
                  autoComplete="search"
                  className="block w-[13rem] sm:w-[20rem] md:w-[30rem] lg:w-[40.3125rem] h-full rounded-l-md border border-[#BDBDBD] py-1 md:py-1.5 text-[#34405480] ring-1 ring-inset ring-[#BDBDBD] placeholder:text-[#BDBDBD] placeholder:font-normal placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-[#FF7F50] sm:text-sm sm:leading-6 shadow-md"
                  style={{boxShadow: "2px 2px 2px 0px #1d293940"}}
                />
              </section>
              <button className="h-full shrink-0 font-normal sm:font-semibold text-sm md:py-2 px-6 rounded-r-md text-[#FFFFFF] bg-[#FF7F50] hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300" style={{boxShadow: "2px 2px 2px 0px #1d293940"}}>
                Search
              </button>
            </section>
          </section>

          {/* FAQs */}

          <section className="text-[#344054] pl-7 pb-8 sm:pb-12">
            <ol className="list-decimal space-y-4">
              {faqs.map(faq => {
                return (
                    <li key={faq.id} className="text-sm sm:text-base text-justify font-bold ">{faq.question}
                      <ul className="list-disc list-inside space-y-4">
                        <li className="text-sm sm:text-base text-justify font-normal mt-3">{faq.answer}</li>
                      </ul>
                    </li> 
                    
                )
              })}
            </ol>
          </section>

          {/* Contact us */}
          <section className="text-[#344054] text-sm sm:text-base font-bold">
              Didn&#39;t get see what you were looking for? <Link href="/contact" className="text-[#FF7F50] font-extrabold hover:underline">Contact Us</Link> now.
          </section>
        </section>
      </section>

      <Footer />
    </>
  }
  
  export default FAQ;