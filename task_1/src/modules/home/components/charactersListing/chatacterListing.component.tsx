import { useFavoriteCharacters } from 'src/common/store/favoriteCharacters/favoriteCharacters.hook'

import { ListedCharacter } from './listedCharacter/listedCharacter.component'

import type { FormatedCharacter } from 'src/common/typings/types'

type Props = {
  readonly characters: readonly FormatedCharacter[]
}

export const CharacterListing = ({ characters }: Props) => {
  const { isFavorite } = useFavoriteCharacters()

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
