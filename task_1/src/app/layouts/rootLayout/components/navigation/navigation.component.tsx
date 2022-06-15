import Cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { routes } from 'src/common/constants/constants'

import Styles from './navigation.module.scss'

export const Navigation = () => {
  const router = useRouter()

  return (
    <nav className={Styles.navigation}>
      <ul>
        <li>
          <Link href={routes.home}>
            <a
              className={Cn(Styles.link, {
                [Styles.activeLink]: routes.home === router.pathname,
              })}>
              home page
            </a>
          </Link>
        </li>
        <Link href={routes.favoriteCharacters}>
          <a
            className={Cn(Styles.link, {
              [Styles.activeLink]:
                routes.favoriteCharacters === router.pathname,
            })}>
            favourite characters
          </a>
        </Link>
      </ul>
    </nav>
  )
}
