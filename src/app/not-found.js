import Link from 'next/link'
import Image from 'next/image'
import Error from '/public/assets/404.png'

const NotFound = () => {
    return <>
      <section className="pt-[6.5rem] sm:pt-36 pb-16 lg:pb-0 flex w-full min-h-screen flex-col items-center">
        <section className="text-center text-[#344054]">
          <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[3.5rem] font-bold">404 - Dimensional Drift</h1>
        </section>

        <section className="pt-6 lg:px-8 flex flex-col lg:flex-row justify-center gap-6 lg:gap-4 xl:gap-6">
          <Image src={Error} alt='Error 404' width={314} height={456} priority className='w-[17rem] sm:w-[18rem] md:w-[19.524rem]' />
        </section>

        <section className="pt-6 px-4 sm:px-8 md:px-12 lg:px-[8.4rem] lg:mb-[4rem] flex flex-col lg:flex-row justify-center">
          <p className='text-sm sm:text-lg lg:text-[1.5rem] text-[#344054] font-medium text-center'>Dimensional drift detected. This page slipped into another dimension. Our multidimensional team is bridging the gap to bring it back.</p>
        </section>
      </section>
    </>
  }
  
  export default NotFound