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
        className='flex relative flex-col text-center my-auto md:text-left xl:px-10 items-center mx-auto justify-center py-16'>
        
        <h3 className='text-4xl font-semibold font-akira'>Skills</h3>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 mt-10'>
            <Skill imgUrl="/skills/html.png" name='html' />
            <Skill imgUrl="/skills/css.png" name='css' />
            <Skill imgUrl="/skills/js.png" name='javascript' />
            <Skill imgUrl="/skills/ts.png" name='typescript' />
            <Skill imgUrl="/skills/ps.png" name='photoshop' />
            <Skill imgUrl="/skills/ae.png" name='after effects' />
            <Skill imgUrl="/skills/pr.png" name='premier pro' />
            <Skill imgUrl="/skills/ai.png" name='graphic design' />
            <Skill imgUrl="/skills/xd.png" name='ui design' />
            <Skill imgUrl="/skills/3d.png" name='3d modelling' />
            <Skill imgUrl="/skills/py.png" name='python' />
            <Skill imgUrl="/skills/php.png" name='php' />
            <Skill imgUrl="/skills/react.png" name='react.js' />
            <Skill imgUrl="/skills/next.png" name='next.js' />
            <Skill imgUrl="/skills/flask.png" name='flask' />
            <Skill imgUrl="/skills/firebase.png" name='firebase' />
            <Skill imgUrl="/skills/git.png" name='git' />
            <Skill imgUrl="/skills/tailwind.png" name='tailwind css' />
            <Skill imgUrl="/skills/heroku.png" name='heroku' />
            <Skill imgUrl="/skills/mysql.png" name='mysql' />
            <Skill imgUrl="/skills/bs.png" name='bootstrap' />
            <Skill imgUrl="/skills/lua.png" name='lua' />
        </div>

    </motion.div>
  )
}