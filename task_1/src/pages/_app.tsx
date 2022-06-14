import type { AppProps } from 'next/app'

function AppRoot({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default AppRoot
