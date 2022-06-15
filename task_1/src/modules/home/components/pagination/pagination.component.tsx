import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useRouteChange } from 'src/app/contexts/contexts'
import { keyInObject } from 'src/common/utils/utils'

import Styles from './pagination.module.scss'

import type { MouseEvent } from 'react'

type Props = {
  readonly paginationQueries: {
    readonly previous: string | null
    readonly next: string | null
  }
}

export const Pagination = ({ paginationQueries }: Props) => {
  const router = useRouter()
  const { status } = useRouteChange()

  const routeIsChanging = status === 'pending'

  const handleClick = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement
      const type = target.innerText

      if (keyInObject(paginationQueries, type)) {
        void router.push({
          query: {
            page: paginationQueries[type],
          },
        })
      }
    },
    [router, paginationQueries]
  )

  return (
    <div className={Styles.wrapper}>
      <button
        onClick={handleClick}
        disabled={!paginationQueries.previous || routeIsChanging}>
        previous
      </button>
      <button
        onClick={handleClick}
        disabled={!paginationQueries.next || routeIsChanging}>
        next
      </button>
    </div>
  )
}
