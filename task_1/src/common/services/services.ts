import {
  fetcher,
  camelCaseObject,
  compactArray,
  pick,
} from 'src/common/utils/utils'

import type { Character } from 'src/typings/types'

const BASE_URL = 'https://swapi.dev/api'

type FetchCharactersData = {
  readonly results: readonly Character[]
  readonly next: string | null
  readonly previous: string | null
}

const getIdByUrl = (url: string) => compactArray(url.split('/')).pop()!

export const fetchCharacters = async (pageNumber: string) => {
  const { previous, next, results } = await fetcher<FetchCharactersData>(
    `${BASE_URL}/people/?page=${pageNumber}`
  )
  const characters = results
    .map(camelCaseObject)
    .map(({ url, ...character }) => ({
      ...character,
      id: getIdByUrl(url),
    }))

  return {
    previous,
    next,
    characters,
  }
}

export const fetchCharacter = async (id: string) => {
  const character = await fetcher<Character>(`${BASE_URL}/people/${id}`)
  const formatedCharacter = pick(camelCaseObject(character), [
    'name',
    'height',
    'mass',
    'hairColor',
    'skinColor',
    'url',
  ])

  const { url, ...restCharacter } = formatedCharacter

  return {
    ...restCharacter,
    id: getIdByUrl(url),
  }
}
