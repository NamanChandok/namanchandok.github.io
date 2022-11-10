import React from 'react';
import {motion} from "framer-motion";
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex relative flex-col text-center my-auto md:text-left xl:flex-row max-w-5xl xl:px-10 min-h-screen items-center mx-auto justify-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#A69C94] text-xl -mr-[20px]'>Skills</h3>
        <div className='grid grid-cols-4 gap-5 mt-10'>
            <Skill imgUrl="./skills/html.png" name='html' />
            <Skill imgUrl="./skills/css.png" name='css' />
            <Skill imgUrl="./skills/js.png" name='javascript' />
            <Skill imgUrl="./skills/ps.png" name='photoshop' />
            <Skill imgUrl="./skills/ae.png" name='after effects' />
            <Skill imgUrl="./skills/ai.png" name='graphic design' />
            <Skill imgUrl="./skills/xd.png" name='ui design' />
            <Skill imgUrl="./skills/3d.png" name='3d modelling' />
            <Skill imgUrl="./skills/py.png" name='python' />
            <Skill imgUrl="./skills/php.png" name='php' />
            <Skill imgUrl="./skills/react.png" name='react.js' />
            <Skill imgUrl="./skills/next.png" name='next.js' />
        </div>

    </motion.div>
  )
}