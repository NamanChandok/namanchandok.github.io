import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-bruh-white text-bruh-black h-screen overflow-y-scroll z-0 scrollbar-thin scrollbar-track-bruh-black scrollbar-thumb-bruh-white/70 scroll-smooth'>
      <Head>
        <title>Naman Chandok</title>
        <meta name="description"
            content="I'm a college student living in New Delhi, India and this is my portfolio website." />
        <meta name="keywords"
            content="Naman, Chandok, Naman Chandok, naman, chandok, naman chandok, namanchandok, NamanChandok, br0wot" />
        <meta name="author" content="Naman Chandok" />
        <link rel="icon" href="/favicon.ico" />
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

    </div>
  )
}
