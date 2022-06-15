import { useCallback, useMemo } from 'react'
import { useRefreshServerSide } from 'src/common/hooks/hooks'
import {
  createSafeContext,
  createLocalStorageControl,
} from 'src/common/logic/logic'
import { isString, exclude } from 'src/common/utils/utils'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

type ContextValue = {
  readonly addFavoriteCharacter: (name: string) => void
  readonly removeFavoriteCharacter: (name: string) => void
}

const CONTEXT_NAME = 'favoriteCharacters'

const localStorageControl = createLocalStorageControl<readonly string[]>(
  CONTEXT_NAME,
  (item, value) => {
    const currentItem = item || []

    if (isString(value)) {
      const nextItem = currentItem.includes(value)
        ? exclude(currentItem, value)
        : [...currentItem, value]

      return nextItem
    }

    return currentItem
  }
)

const [FavoriteCharactersProviderImpl, useFavoriteCharacters] =
  createSafeContext<ContextValue>(CONTEXT_NAME)

const isFavoriteCharactersPage = false

const FavoriteCharactersProvider = ({ children }: Props) => {
  const { refreshServerSide } = useRefreshServerSide()

  const addFavoriteCharacter = useCallback(
    async (name: string) => {
      localStorageControl.setItem(name)

      if (isFavoriteCharactersPage) {
        await refreshServerSide()
      }
    },
    [refreshServerSide]
  )

  const removeFavoriteCharacter = useCallback(
    async (name: string) => {
      localStorageControl.setItem(name)

      if (isFavoriteCharactersPage) {
        await refreshServerSide()
      }
    },
    [refreshServerSide]
  )

  const value = useMemo(
    () => ({
      addFavoriteCharacter,
      removeFavoriteCharacter,
    }),
    [addFavoriteCharacter, removeFavoriteCharacter]
  )

  return (
    <FavoriteCharactersProviderImpl value={value}>
      {children}
    </FavoriteCharactersProviderImpl>
  )
}

export { FavoriteCharactersProvider, useFavoriteCharacters }
