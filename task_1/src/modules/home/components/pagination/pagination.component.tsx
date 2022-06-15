import { useRouter } from 'next/router'
import { useCallback } from 'react'
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
      <button onClick={handleClick} disabled={!paginationQueries.previous}>
        previous
      </button>
      <button onClick={handleClick} disabled={!paginationQueries.next}>
        next
      </button>
    </div>
  )
}
