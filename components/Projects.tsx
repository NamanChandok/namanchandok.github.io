import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from './projectsdata'
import Project from './Project'
import { useEffect } from 'react'

type Props = {}

export default function Projects({}: Props) {
    const projects = projectsData;

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        const cardsContainer = document.querySelectorAll('.cards')[0];
        cardsContainer.addEventListener('mousemove', (e:any) => {
            cards.forEach((card:any) => { 
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--x', `${ x }px`);
                    card.style.setProperty('--y', `${ y }px`);
            })
        })
    }, [])

    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className='relative flex flex-col py-16 max-w-6xl justify-evenly mx-auto items-center z-0'>
            <h3 className='text-5xl font-semibold font-akira'>Projects</h3>

            <div className='grid md:grid-cols-3 gap-3 mt-10 px-8 cards'>
                {projects.map((project, i) => (
                    <motion.div key={i}

                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    transition={{duration:1, ease:'anticipate', delay: 0.2*(i%3)}}>
                        <Project {...project} />
                    </motion.div>
                ))}
            </div>

        </motion.div>
    )
}