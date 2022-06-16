import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  addFavoriteCharacters as addFavoriteCharactersImpl,
  removeFavoriteCharacter as removeFavoriteCharacterImpl,
} from './favoriteCharacters.slice'

import type { RootState } from '../store'
import type { FormatedCharacter } from 'src/common/typings/types'

export const useFavoriteCharacters = () => {
  const favoriteCharacters = useSelector(
    (state: RootState) => state.favoriteCharacters
  )
  const dispatch = useDispatch()

  const addFavoriteCharacter = useCallback(
    (character: FormatedCharacter) => {
      dispatch(addFavoriteCharactersImpl(character))
    },
    [dispatch]
  )

  const removeFavoriteCharacter = useCallback(
    (name: string) => {
      dispatch(removeFavoriteCharacterImpl(name))
    },
    [dispatch]
  )

  const isFavorite = useCallback(
    (name: string) => {
      return favoriteCharacters.some(
        (favoriteCharacter) => favoriteCharacter.name === name
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- equality by primitive values is safty
    [favoriteCharacters.length]
  )

  return {
    isFavorite,
    favoriteCharacters,
    addFavoriteCharacter,
    removeFavoriteCharacter,
  }
}
