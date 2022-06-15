import { ListedCharacter } from './listedCharacter/listedCharacter.component'

import type { Character } from 'src/typings/types'

type Props = {
  readonly characters: readonly CamelCaseObject<Character>[]
}

export const CharacterListing = ({ characters }: Props) => {
  return (
    <ul>
      {characters.map((character) => (
        <ListedCharacter key={character.name} {...character} />
      ))}
    </ul>
  )
}
