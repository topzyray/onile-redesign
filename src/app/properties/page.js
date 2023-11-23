
import Link from 'next/link'
import Image from 'next/image'
import icon from '/public/assets/icon_add-one.svg'


const Properties = () => {
  return <>
    <section className="pt-20 sm:pt-32 flex w-full min-h-screen flex-col items-center justify-between">
      <section className="w-full flex flex-col">

        {/* Search field on top */}
        <section className="bg-[#F3F4F5] w-full py-8">
          <section className="flex justify-center gap-1">
            <section className="shrink-0">
              <input type="search" name="search" id="search" placeholder="Looking for anything" autoComplete="address-level2" className="block w-[13rem] sm:w-[20rem] md:w-[30rem] lg:w-[40.3125rem] rounded-md border-0 py-1 md:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 placeholder:pl-2 placeholder:font-normal placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-[#FF7F50] sm:text-sm sm:leading-6" />
            </section>
            <button className="shrink-0 font-normal sm:font-semibold text-sm md:py-2 px-3 rounded-md text-[#FFFFFF] bg-[#FF7F50] hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
              Search
            </button>
          </section>
        </section>

        {/* Purchase guide and Sell */}
        <section className="flex justify-center md:gap-2 h-[8rem] md:h-[10.375rem] px-1">
          <section style={{ backgroundImage: `url('/assets/bg_property_guide.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-[56.25rem] flex flex-col py-8 pl-0 md:pl-[4.37rem] rounded-l-md md:rounded-l-2xl">
            <h1 className="text-[#F2F4F7] text-[1.5rem] md:text-[2.5rem] text-center md:text-left font-semibold">How to buy on Onile</h1>
            <Link href='/guide' className='text-xl text-center md:text-left md:text-2xl text-[#FF7F50] underline font-semibold hover:text-orange-300'>Click Here</Link>
          </section>
          <section className="bg-[#00B3D1] text-center text-[#F2F4F7] w-[19rem] sm:w-[16.375rem] rounded-r-md md:rounded-r-2xl py-1 md:py-4 inline-flex flex-col justify-center content-center">
            <p className='text-sm sm:text-base md:text-lg lg:text-2xl font-bold'>Ready to sell your property?</p>
            <div><p className='w-6 h-6 md:w-8 md:h-8 md:my-1 bg-white text-[#00B3d1] text-center md:text-3xl rounded-full inline-flex flex-col justify-center content-center'>+</p></div>
            <p className='text-xs sm:text-base font-normal'>List your property today !</p>
          </section>
        </section>
      </section>
    </section>
  </>
}

export default Properties