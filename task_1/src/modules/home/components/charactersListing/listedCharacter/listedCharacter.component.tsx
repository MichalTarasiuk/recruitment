import Link from 'next/link'

import Styles from './listedCharacter.module.scss'

import type { CamelCaseObject } from 'src/typings/global'
import type { FormatedCharacter } from 'src/typings/types'

type Props = CamelCaseObject<FormatedCharacter>

export const ListedCharacter = ({ name, id }: Props) => {
  return (
    <Link href={`/${id}`}>
      <article className={Styles.listedWrapper}>
        <h2>{name}</h2>
        <button>add to the favored</button>
      </article>
    </Link>
  )
}
