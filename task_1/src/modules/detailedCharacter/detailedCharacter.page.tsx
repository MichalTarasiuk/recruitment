import { useMemo, useCallback } from 'react'
import { fetchCharacter } from 'src/common/services/services'
import { useFavoriteCharacters } from 'src/common/store/favoriteCharacters/favoriteCharacters.hook'
import { isString, entries, camelCaseToNormal } from 'src/common/utils/utils'

import Styles from './detailedCharacter.module.scss'

import type { GetServerSidePropsContext } from 'next'

type Props = InferServerPropsType<typeof getServerSideProps>

export const DetailedCharacterPage = ({ character }: Props) => {
  const { favoriteCharacters, addFavoriteCharacter } = useFavoriteCharacters()
  const isFavorite = useMemo(
    () =>
      favoriteCharacters.some(
        (favoriteCharacter) => favoriteCharacter.id === character.id
      ),

    // eslint-disable-next-line react-hooks/exhaustive-deps -- equality by primitive values is safty
    [favoriteCharacters.length, character.id]
  )

  const handleFavorite = useCallback(() => {
    addFavoriteCharacter(character)
  }, [character, addFavoriteCharacter])

  return (
    <div className={Styles.wrapper}>
      <ul>
        {entries(character).map(([key, value]) => {
          return (
            <li key={key}>
              <span>{camelCaseToNormal(key)}</span>: {value}
            </li>
          )
        })}
      </ul>
      {!isFavorite && <button onClick={handleFavorite}>add to favorite</button>}
    </div>
  )
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  try {
    if (query.id && isString(query.id)) {
      const character = await fetchCharacter(query.id)

      return {
        props: {
          character,
        },
      }
    } else {
      throw Error('Invalid character id')
    }
  } catch (error) {
    console.error(error)

    return { notFound: true }
  }
}
