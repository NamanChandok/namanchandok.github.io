import React from 'react'
import Image from 'next/image';

type Props = {
    imgUrl: string;
    name: string;
};

export default function Skill({ imgUrl, name }: Props) {
  return (
    <div className='group relative flex flex-col items-center cursor-pointer'>
        <div className='w-18 h-18 xl:w-24 xl:h-24 overflow-hidden'>
            <Image 
                src={imgUrl} alt={name} width={100} height={100}
                className='object-cover w-full h-full transition duration-300 ease-in-out filter grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100'
            />
        </div>
        <p className='text-md uppercase font-bold tracking-wide text-[#333533] text-center transition duration-300 ease-in-out group-hover:text-bruh-black group-hover:translate-y-1'>{name}</p>
    </div>
  )
}