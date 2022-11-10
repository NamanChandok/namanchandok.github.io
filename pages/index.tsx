import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className='bg-[#1F2226] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-thin scrollbar-track-[#3B3C40]/20 scrollbar-thumb-[#A6775B]/80'>
      <Head>
        <title>Naman Chandok</title>
        <meta name="description"
            content="I'm a 17 year old college student living in New Delhi, India and this is my portfolio website." />
        <meta name="keywords"
            content="Naman, Chandok, Naman Chandok, naman, chandok, naman chandok, namanchandok, NamanChandok, br0wot" />
        <meta name="author" content="Naman Chandok" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}

      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      
      {/* About */}
      
      <section id='about' className='snap-center'>
        <About />
      </section>
      
      {/* Skills */}
      
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}

      <section id='projects' className='snap-start'>
        <Projects /> 
      </section>
      
      {/* Contact Me */}

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

    </div>
  )
}