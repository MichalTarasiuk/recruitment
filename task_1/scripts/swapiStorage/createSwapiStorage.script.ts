import { createFetcher } from 'src/common/logic/logic'
import { camelCaseObject } from 'src/common/utils/utils'

import { swapi } from './swapiStorage.constant'
import { charactersSchema } from './swapiStorage.helpers'

import type { CharactersSchema } from './swapiStorage.helpers'

type CharacterSchema = CharactersSchema[number]

const swapiFetcher = createFetcher({
  context: {
    charactersSchema,
  },
  resolver: (data, { charactersSchema }) => charactersSchema.parse(data),
})

export const createSwapiStorage = (() => {
  let swapiStorage = null as readonly CamelCaseObject<CharacterSchema>[] | null

  return () => {
    const storageInitializer = async () => {
      const characters = await swapiFetcher(swapi.url)
      const nextSwapiStorage = characters.map(camelCaseObject)

      swapiStorage = nextSwapiStorage

      return swapiStorage
    }

    const getAllCharacters = async () => {
      if (!swapiStorage) {
        swapiStorage = await storageInitializer()
      }

      return swapiStorage
    }

    const getCharacterByName = async (name: string) => {
      if (!swapiStorage) {
        swapiStorage = await storageInitializer()
      }

      const character = swapiStorage.find(
        (character) => character.name === name
      )

      return character
    }

    return {
      getAllCharacters,
      getCharacterByName,
    }
  }
})()
