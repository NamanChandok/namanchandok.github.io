import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  useEffect(() => {
    const trailer = document.getElementById('trailer') as HTMLElement;
    const icon = document.querySelector('.trailer-icon') as HTMLElement;
    const animateTrailer = (e:any, i:any) => {
      const keyframes = {
        left: e.clientX - trailer.offsetWidth/2 + 'px',
        top: e.clientY - trailer.offsetWidth/2 + 'px',
        transform: `scale(${i ? 1.5 : 1})`,
        color: i ? '#fff' : 'transparent',
        border: i ? '2px solid #fff' : '2px solid #333',
      }
      const keyframes_icon = {rotate: i ? '-45deg' : '0deg'}
      trailer.animate(keyframes, {
        duration: 200,
        fill: 'forwards'
      })
      icon.animate(keyframes_icon, {
        duration: 300, 
        fill: 'forwards',
      })
    }
    window.onmousemove = (e:any) => {
      const interactable = e.target.closest('a') || e.target.closest('button');
      const interacting = interactable !== null;
      animateTrailer(e, interacting); 
    }
    
  }, [])
  return (
    <>
      <div id='trailer' className='hidden h-6 w-6 rounded-full border-[#333] border-2 fixed top-0 left-0 z-[100] md:flex items-center justify-center bg-black/40 pointer-events-none opacity-0 transition-opacity duration-500 ease-in-out'>
        <FontAwesomeIcon icon={faArrowRight} className='text-inherit h-2.5 trailer-icon' />
      </div>
      <Head>
        <title>Naman Chandok</title>
        <meta name="description"
            content="I am a college student living in New Delhi, India and this is my portfolio website." />
        <meta name="keywords"
            content="Naman, Chandok, Naman Chandok, naman, chandok, naman chandok, namanchandok, NamanChandok, br0wot" />
        <meta name="author" content="Naman Chandok" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#141414" />
        <meta name="description" content="I am a college student living in New Delhi, India and this is my portfolio website." />

        <meta property="og:url" content="https://namanchandok.me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Naman Chandok" />
        <meta property="og:description" content="I am a college student living in New Delhi, India and this is my portfolio website." />

        <meta property="og:image" content="/preview.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="namanchandok.me" />
        <meta property="twitter:url" content="https://namanchandok.me" />
        <meta name="twitter:title" content="Naman Chandok" />
        <meta name="twitter:description" content="I am a college student living in New Delhi, India and this is my portfolio website." />

        <meta name="twitter:image" content="./preview.png" />

        <link rel="manifest" href="./manifest.json" />

        <link rel="apple-touch-icon" href="./favicon.ico" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}

      <section id='home'>
        <Hero />
      </section>
      
      {/* About */}
      
      <section id='about'>
        <About />
      </section>
      
      {/* Skills */}
      
      <section id='skills'>
        <Skills />
      </section>

      {/* Projects */}

      <section id='projects'>
        <Projects /> 
      </section>
      
      {/* Contact Me */}

      <section id='contact'>
        <Contact />
      </section>
      
      {/* Footer */}

      <section id='footer'>
        <Footer />
      </section>

    </>
  )
}
