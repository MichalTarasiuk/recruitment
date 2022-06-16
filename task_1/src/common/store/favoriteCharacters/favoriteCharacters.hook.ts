import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  addFavoriteCharacters as addFavoriteCharactersImpl,
  removeFavoriteCharacter as removeFavoriteCharacterImpl,
} from './favoriteCharacters.slice'

import type { RootState } from '../store'
import type { FormatedCharacter } from 'src/typings/types'

export const useFavoriteCharacters = () => {
  const favoriteCharacters = useSelector(
    (state: RootState) => state.favoriteCharacters
  )
  const dispatch = useDispatch()

  const addFavoriteCharacters = useCallback(
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

  return {
    favoriteCharacters,
    addFavoriteCharacters,
    removeFavoriteCharacter,
  }
}
