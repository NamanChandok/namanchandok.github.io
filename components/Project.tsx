import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

type Props = {
    title: string,
    imgUrl: string,
    desc: string,
    gitUrl: string
}

export default function Project({title, imgUrl, desc, gitUrl}: Props) {
  return (
    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen text-center'>
        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.4}} viewport={{once:true}} className="rounded-3xl flex-shrink-0 h-72 mt-10 object-contain" src={imgUrl} alt={title} />
        <div className='space-y-3 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-3xl font-semibold text-center tracking-tight'>{title}</h4>
            <p className='text-l text-[#D9C9BA]/80'>{desc}</p>
            <p className='underline decoration-[#D9C9BA] text-xs tracking-wider uppercase'><Link href={gitUrl}>View the project on github</Link></p>
        </div>
    </div>
  )
}