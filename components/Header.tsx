import React from 'react'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub, faSpotify, faDiscord, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <motion.header 
    initial={{
        y:-80
    }}
    animate={{
        y:0
    }}
    transition={{
        duration: 2, 
        ease:'anticipate',
        delay: 1,
    }}
    className='fixed top-0 p-5 md:px-24 flex items-center justify-between bg-bruh-black inset-x-0 z-30'>

        <div className="hidden md:flex flex-col md:flex-row items-center underline decoration-transparent text-bruh-white text-sm underline-offset-2 gap-6">

            <Link className="transition duration-300 hover:decoration-bruh-gray" href="#home">HOME</Link>
            <Link className="transition duration-300 hover:decoration-bruh-gray" href="#about">ABOUT</Link>
            <Link className="transition duration-300 hover:decoration-bruh-gray" href="#skills">SKILLS</Link>
            <Link className="transition duration-300 hover:decoration-bruh-gray" href="#projects">PROJECTS</Link>
            <Link className="transition duration-300 hover:decoration-bruh-gray" href="#contact">CONTACT</Link>

        </div>

        <Link href="#home" className='font-akira hover:text-bruh-gray transition duration-300 block md:hidden'>Naman Chandok</Link>

        <div className='hidden md:flex flex-row items-center text-bruh-white gap-7'>
            <Link href="https://instagram.com/namanchandok" className='h-5 hover:text-bruh-gray transiton duration-300'>
                <FontAwesomeIcon icon={faInstagram} className='h-full'/>
            </Link>
            <Link href="https://github.com/namanchandok" className='h-5 hover:text-bruh-gray transiton duration-300'>
                <FontAwesomeIcon icon={faGithub} className='h-full'/>
            </Link>
            <Link href="https://twitter.com/br0wot" className='h-5 hover:text-bruh-gray transiton duration-300'>
                <FontAwesomeIcon icon={faTwitter} className='h-full'/>
            </Link>
            <Link href="mailto:namanchandok1@gmail.com" className='h-5 hover:text-bruh-gray transiton duration-300'>
                <FontAwesomeIcon icon={faEnvelope} className='h-full'/>
            </Link>
            <Link href="https://www.linkedin.com/in/naman-chandok-874b421b0/" className='h-5 hover:text-bruh-gray transiton duration-300'>
                <FontAwesomeIcon icon={faLinkedinIn} className='h-full'/>
            </Link>
            <Link href="https://www.behance.net/naman-chandok" className='h-5 hover:text-bruh-gray transiton duration-300'>
                <FontAwesomeIcon icon={faBehance} className='h-full'/>
            </Link>
            <Link href="https://discord.com/users/481518334509187089" className='h-5 hover:text-bruh-gray transiton duration-300'>
                <FontAwesomeIcon icon={faDiscord} className='h-full'/>
            </Link>
            <Link href="https://open.spotify.com/user/gh04xw1wcz6kkx4icrbbxogb3?si=0b493b9fe369429f" className='h-5 hover:text-bruh-gray transiton duration-300'>
                <FontAwesomeIcon icon={faSpotify} className='h-full'/>
            </Link>
        </div>
    </motion.header>
  )
}