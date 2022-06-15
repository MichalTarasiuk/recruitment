import { configureStore } from '@reduxjs/toolkit'

import { reducer as favoriteCharactersReducer } from './favoriteCharacters.slice'

export const store = configureStore({
  reducer: {
    favoriteCharacters: favoriteCharactersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
