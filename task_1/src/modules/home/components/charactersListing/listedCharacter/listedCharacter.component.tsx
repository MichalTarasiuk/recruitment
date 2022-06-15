import Styles from './listedCharacter.module.scss'

import type { Character } from 'src/typings/types'

type Props = CamelCaseObject<Character>

export const ListedCharacter = ({ name }: Props) => {
  return (
    <article className={Styles.listedWrapper}>
      <h2>{name}</h2>
      <button>add to the favored</button>
    </article>
  )
}
