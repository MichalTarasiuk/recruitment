import { Navigation } from './components/components'
import Styles from './rootLayout.module.scss'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <div className={Styles.wrapper}>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
