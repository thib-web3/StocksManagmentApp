import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Ctx } from './auth/ctx'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Ctx>
      <Component {...pageProps} />
    </Ctx>
  )
}
