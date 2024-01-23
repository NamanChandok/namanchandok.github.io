import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    title: string,
    imgUrl: string,
    desc: string,
    url: string
}

export default function Project({title, imgUrl, desc, url}: Props) {
  return (
    <Link href={url} className='flex-shrink-0 snap-center flex flex-col items-center bg-[#333533] group overflow-hidden rounded-md' aria-label={title}>
        <Image className="flex-shrink-0 w-full h-64 object-cover group-hover:scale-110 transition duration-300" src={imgUrl} alt={title} width={400} height={400} />
        <div className='space-y-1 px-4 md:px-10 py-6 bg-[#222] w-full z-10'>
            <h4 className='text-3xl font-akira tracking-tight text-bruh-white'>{title}</h4>
            <div className='relative h-5 overflow-hidden'>
              <p className='text-gray-400 uppercase text-sm absolute translate-y-0 transition duration-300 group-hover:-translate-y-10'>{desc}</p>
              <p className='text-gray-400 text-sm uppercase absolute translate-y-10 transition duration-300 hover:text-bruh-gray group-hover:translate-y-0'>Show Project</p>
            </div>
        </div>
    </Link>
  )
}