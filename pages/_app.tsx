import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Cabin } from '@next/font/google'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

const cabin = Cabin({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  } ,[])

  return (
    <main className={cabin.className+' bg-bruh-black text-bruh-white'} >
      <Component {...pageProps} />
    </main>
  )
}
