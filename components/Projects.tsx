import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from './projectsdata'
import Project from './Project'

type Props = {}

export default function Projects({}: Props) {
    const projects = projectsData
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-bruh-white text-xl -mr-[20px] '>Projects</h3>

            <div className='relative flex w-full overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#3d3b40]/20 scrollbar-thumb-bruh-primary/80'>
                {projects.map((project, i) => (
                    <Project key={i} {...project} />
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-bruh-primary/10 left-0 h-[400px] -skew-y-12 animate-pulse'></div>
        </motion.div>
    )
}