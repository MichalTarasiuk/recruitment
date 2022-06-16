import { useFavoriteCharacters } from 'src/common/store/favoriteCharacters/favoriteCharacters.hook'

import Styles from './listingFavoriteCharacters.module.scss'

import type { FormatedCharacter } from 'src/typings/types'

export const ListingFavoriteCharacters = () => {
  const { favoriteCharacters } = useFavoriteCharacters()
  const isEmpty = favoriteCharacters.length === 0

  return isEmpty ? (
    <h2 className={Styles.heading}>list is empty</h2>
  ) : (
    <ul className={Styles.list}>
      {favoriteCharacters.map((character) => (
        <li key={character.id}>
          <ListedFavoriteCharacter character={character} />
        </li>
      ))}
    </ul>
  )
}

type Props = {
  readonly character: FormatedCharacter
}

const ListedFavoriteCharacter = ({ character }: Props) => {
  const { removeFavoriteCharacter } = useFavoriteCharacters()

  return (
    <article className={Styles.listedElement}>
      <h2>{character.name}</h2>
      <button onClick={() => removeFavoriteCharacter(character.name)}>
        remove
      </button>
    </article>
  )
}
