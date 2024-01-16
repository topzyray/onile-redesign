"use client";

import Image from 'next/image'
import Link from 'next/link';
import { useRef } from 'react'
import { useIsVisible } from '@/app/_lib/useIsVisible';
import { BsBookmarkCheck } from "react-icons/bs";
import { BsShare } from "react-icons/bs";


const Card = ({imageUrl, altText, title, location, size, price}) => {

    const ref = useRef()
    const isVisible = useIsVisible(ref)

  return <>
    <Link href="/properties/1" ref={ref} className={`bg-[#FAFAFA] focus:outline-none focus:ring focus:ring-gray-300   transform ease-in-out duration-500 scale-95 hover:scale-100 ${isVisible ? "hover:shadow-[0_2px_6px] hover:shadow-[#ff7f50] hover:border-none hover:rounded-md" : "shadow-none"}`}>
        <div className="flex flex-col content-center gap-3 rounded-lg w-[16.875rem] h-[23.627rem] border border-solid border-[#CECECE]  ">
            <div>
                <Image src={imageUrl} alt={altText} width={270} height={237} className='rounded-t-lg object-cover' />
            </div>

            <div className='flex flex-col w-[16.3123rem] h-[6.25rem] px-5 pt-4 gap-2 text-[#344054]'>
                <h4 className='text-[0.875rem] font-semibold'>{title}</h4>
                <p className='text-[0.75rem] font-normal'>{location}</p>
                <p className='opacity-50 font-normal'>{size}</p>
                <div className='flex flex-row justify-between'>
                    <h4 className='text-[0.875rem] font-bold'>₦{price}</h4>
                    <p className='flex gap-2'>
                        <span>
                            <BsShare className='w-5 h-5' />
                        </span>
                        <span>
                            <BsBookmarkCheck className='w-5 h-5' />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </Link>

  </>
}

export default Card