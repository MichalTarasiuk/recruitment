/* eslint-disable no-param-reassign -- liblary logic */
import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { FormatedCharacter } from 'src/common/typings/types'

const initialState: readonly FormatedCharacter[] = []

const favoriteCharactersSlice = createSlice({
  name: 'favoriteCharacters',
  initialState,
  reducers: {
    add(state, action: PayloadAction<FormatedCharacter>) {
      state.push(action.payload)
    },
    removeByName(state, action: PayloadAction<string>) {
      return state.filter((character) => character.name !== action.payload)
    },
  },
})

const { add: addFavoriteCharacters, removeByName: removeFavoriteCharacter } =
  favoriteCharactersSlice.actions

const reducer = favoriteCharactersSlice.reducer

export { addFavoriteCharacters, removeFavoriteCharacter, reducer }
