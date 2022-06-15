import type { Character } from 'src/typings/types'

type Props = CamelCaseObject<Character>

export const ListedCharacter = ({ name }: Props) => {
  return (
    <article>
      <h2>{name}</h2>
    </article>
  )
}
