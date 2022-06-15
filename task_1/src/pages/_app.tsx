import '../../public/styles/global.styles.scss'

import { AppFlow } from 'src/app/app.flow'

import type { AppProps } from 'next/app'

function AppRoot({ Component, pageProps }: AppProps) {
  return (
    <AppFlow>
      <Component {...pageProps} />
    </AppFlow>
  )
}

export default AppRoot
