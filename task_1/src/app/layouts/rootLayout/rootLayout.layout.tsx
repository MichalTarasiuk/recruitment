import Cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { routes } from 'src/common/constants/constants'

import Styles from './rootLayout.module.scss'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  const router = useRouter()

  return (
    <div className={Styles.wrapper}>
      <nav className={Styles.navigation}>
        <ul>
          <li>
            <Link href={routes.home}>
              <a
                className={Cn(Styles.link, {
                  [Styles.activeLink]: router.asPath.startsWith(routes.home),
                })}>
                home page
              </a>
            </Link>
          </li>
          <Link href={routes.favoriteCharacters}>
            <a
              className={Cn(Styles.link, {
                [Styles.activeLink]:
                  routes.favoriteCharacters === router.asPath,
              })}>
              favoritue characters
            </a>
          </Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}
