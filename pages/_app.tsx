import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Cabin } from '@next/font/google'
import { useEffect } from 'react'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const cabin = Cabin({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  const lenis = useLenis(()=>{})

  return (
    <ReactLenis root>
    <main className={cabin.className+' bg-bruh-black text-bruh-white'} >
      <Component {...pageProps} />
    </main>
    </ReactLenis>
  )
}
