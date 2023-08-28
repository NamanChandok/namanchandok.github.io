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
        className='relative flex flex-col py-16 max-w-6xl justify-evenly mx-auto items-center z-0'>
            <h3 className='text-4xl font-semibold font-akira'>Projects</h3>

            <div className='grid md:grid-cols-3 gap-4 mt-10 px-8'>
                {projects.map((project, i) => (
                    <Project key={i} {...project} />
                ))}
            </div>

        </motion.div>
    )
}