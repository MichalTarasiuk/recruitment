import Link from 'next/link'
import { routes } from 'src/common/constants/constants'

import Styles from './rootLayout.module.scss'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <div className={Styles.wrapper}>
      <nav className={Styles.navigation}>
        <ul>
          <li>
            <Link href={routes.home}>
              <a>home page</a>
            </Link>
          </li>
          <Link href={routes.favoriteCharacters}>
            <a>favoritue characters</a>
          </Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}
