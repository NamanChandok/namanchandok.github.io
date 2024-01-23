import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub, faSpotify, faDiscord, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
    
    function handleClick() {

        const navbar = document.getElementById("side-nav");
        const toggle = document.querySelector(".side-nav-toggle");

        const visibility = navbar!.getAttribute('data-visible');
        if(visibility === "false") {
            navbar!.setAttribute('data-visible', 'true');
            toggle!.setAttribute('aria-expanded', 'true');
        } else {
            navbar!.setAttribute('data-visible', 'false');
            toggle!.setAttribute('aria-expanded', 'false');
        }
    }

    const [clientWindowHeight, setClientWindowHeight] = useState(0);

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
        console.log(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

    useEffect(() => {
        let backgroundTransparacyVar = Number(clientWindowHeight > 100);
        setBackgroundTransparacy(backgroundTransparacyVar);
    }, [clientWindowHeight]);
  
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
    className='fixed top-0 p-5 md:px-24 flex items-center justify-between inset-x-0 z-30' style={{background: `rgba(20,20,20,${backgroundTransparacy})`}}>

    <Link href="#home" className='font-akira text-bruh-white hover:text-[#CFDBD5]/90 transition duration-300 block md:hidden'>Naman Chandok</Link>

    <div className='flex md:flex-row flex-col md:static fixed justify-between items-start md:p-0 p-6 pt-16 pb-32 h-screen md:h-auto w-full inset-y-0 inset-x-0 bg-[#141414]/60 backdrop-blur-lg z-20 -translate-x-full transition duration-300 ease-in-out md:translate-x-0' id="side-nav" data-visible="false">
        <div className="flex flex-col md:flex-row underline decoration-transparent text-bruh-white text-2xl md:text-sm underline-offset-2 gap-8 md:gap-6">

            <Link className="transition duration-300 decoration-transparent hover:decoration-bruh-gray" href="#home" onClick={handleClick}>HOME</Link>
            <Link className="transition duration-300 decoration-transparent hover:decoration-bruh-gray" href="#about" onClick={handleClick}>ABOUT</Link>
            <Link className="transition duration-300 decoration-transparent hover:decoration-bruh-gray" href="#skills" onClick={handleClick}>SKILLS</Link>
            <Link className="transition duration-300 decoration-transparent hover:decoration-bruh-gray" href="#projects" onClick={handleClick}>PROJECTS</Link>
            <Link className="transition duration-300 decoration-transparent hover:decoration-bruh-gray" href="#contact" onClick={handleClick}>CONTACT</Link>

        </div>

        <div className='flex flex-row items-center text-bruh-white gap-7'>
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

    </div>

    <button className="side-nav-toggle transition duration-300 ease-in-out md:hidden" aria-controls="side-nav"
        aria-expanded="false" onClick={handleClick}></button>

    </motion.header>
  )
}