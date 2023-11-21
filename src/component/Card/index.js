"use client";

import Image from 'next/image'
import Link from 'next/link';


const Card = () => {
  return <>
    <Link href="/properties/1" className='bg-[#FAFAFA] hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300'>
        <div className="flex flex-col content-center gap-3 rounded-lg w-[16.875rem] h-[23.627rem] border border-solid border-[#CECECE]  ">
            <div>
                <Image src="/assets/house11.jpg" alt='Card Image' width={270} height={237} className='rounded-t-lg object-cover' />
            </div>

            <div className='flex flex-col w-[16.3123rem] h-[6.25rem] px-5 pt-4 gap-2 text-[#344054]'>
                <h4 className='text-[0.875rem] font-semibold'>Modern 3 Bedroom Duplex</h4>
                <p className='text-[0.75rem] font-normal'>123 Main Street, Anytown, Ekiti</p>
                <p className='opacity-50 font-normal'>2300 sq ft</p>
                <div className='flex flex-row justify-between'>
                    <h4 className='text-[0.875rem] font-bold'>$4,489,000</h4>
                    <p className='flex gap-1'>
                        <span>
                            <Image src="/assets/share.svg" alt='Share' width={24} height={24} className='' />
                        </span>
                        <span>
                            <Image src="/assets/tick.svg" alt='Tick' width={24} height={24} className='' />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </Link>

  </>
}

export default Card