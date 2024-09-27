import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Cabin } from '@next/font/google'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const cabin = Cabin({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  const lenis = useLenis(()=>{

  })

  return (
    <ReactLenis options={{duration:1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}} root>
    <main className={cabin.className+' bg-bruh-black text-bruh-white'} >
      <Component {...pageProps} />
    </main>
    </ReactLenis>
  )
}
