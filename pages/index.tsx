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
    <div className='bg-bruh-black text-bruh-white h-screen overflow-y-scroll z-0 scrollbar-thin scrollbar-track-bruh-black scrollbar-thumb-bruh-white/70 scroll-smooth'>
      <Head>
        <title>Naman Chandok</title>
        <meta name="description"
            content="I am a college student living in New Delhi, India and this is my portfolio website." />
        <meta name="keywords"
            content="Naman, Chandok, Naman Chandok, naman, chandok, naman chandok, namanchandok, NamanChandok, br0wot" />
        <meta name="author" content="Naman Chandok" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#111111" />
        <meta name="description" content="I am a college student living in New Delhi, India and this is my portfolio website." />

        <meta property="og:url" content="https://namanchandok.me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Naman Chandok" />
        <meta property="og:description" content="I am a college student living in New Delhi, India and this is my portfolio website." />

        <meta property="og:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/namanchandok.me/Naman%20Chandok/https%3A%2F%2Fnamanchandok.me%2Fhello.jpg/og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="namanchandok.me" />
        <meta property="twitter:url" content="https://namanchandok.me" />
        <meta name="twitter:title" content="Naman Chandok" />
        <meta name="twitter:description" content="I am a college student living in New Delhi, India and this is my portfolio website." />

        <meta name="twitter:image" content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/namanchandok.me/Naman%20Chandok/https%3A%2F%2Fnamanchandok.me%2Fhello.jpg/og.png" />

        <link rel="apple-touch-icon" href="/favicon.ico" />
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
