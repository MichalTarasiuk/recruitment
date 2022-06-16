import Link from 'next/link'
import { useCallback } from 'react'
import { useFavoriteCharacters } from 'src/common/store/favoriteCharacters/favoriteCharacters.hook'

import Styles from './listedCharacter.module.scss'

import type { MouseEventHandler } from 'react'
import type { FormatedCharacter } from 'src/typings/types'

type Props = {
  readonly character: FormatedCharacter
  readonly isFavorite: boolean
}

export const ListedCharacter = ({ character, isFavorite }: Props) => {
  const { addFavoriteCharacter } = useFavoriteCharacters()

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.stopPropagation()

      addFavoriteCharacter(character)
    },
    [character, addFavoriteCharacter]
  )

  return (
    <Link href={`/${character.id}`}>
      <article className={Styles.listedWrapper}>
        <h2>{character.name}</h2>
        {!isFavorite && (
          <button onClick={handleClick}>add to the favored</button>
        )}
      </article>
    </Link>
  )
}
