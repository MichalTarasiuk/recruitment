import { useCallback } from 'react'
import { useFavoriteCharacters } from 'src/common/store/favoriteCharacters/favoriteCharacters.hook'

import { ListedCharacter } from './listedCharacter/listedCharacter.component'

import type { FormatedCharacter } from 'src/typings/types'

type Props = {
  readonly characters: readonly FormatedCharacter[]
}

export const CharacterListing = ({ characters }: Props) => {
  const { favoriteCharacters } = useFavoriteCharacters()

  const isFavorite = useCallback(
    (name: string) => {
      return favoriteCharacters.some(
        (favoriteCharacter) => favoriteCharacter.name === name
      )
    },
    [favoriteCharacters]
  )

  return (
    <ul>
      {characters.map((character) => (
        <ListedCharacter
          key={character.id}
          character={character}
          isFavorite={isFavorite(character.name)}
        />
      ))}
    </ul>
  )
}
