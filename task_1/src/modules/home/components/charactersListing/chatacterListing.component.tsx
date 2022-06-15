import { ListedCharacter } from './listedCharacter/listedCharacter.component'

import type { CamelCaseObject } from 'src/typings/global'
import type { FormatedCharacter } from 'src/typings/types'

type Props = {
  readonly characters: readonly CamelCaseObject<FormatedCharacter>[]
}

export const CharacterListing = ({ characters }: Props) => {
  return (
    <ul>
      {characters.map((character) => (
        <ListedCharacter key={character.id} {...character} />
      ))}
    </ul>
  )
}
