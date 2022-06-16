import {
  fetcher,
  camelCaseObject,
  compactArray,
  pick,
} from 'src/common/utils/utils'

import { BASE_URL, characterKeysToPick } from './services.helpers'

import type { Character } from 'src/common/typings/types'

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
  const formatedCharacter = pick(
    camelCaseObject(character),
    characterKeysToPick
  )

  const { url, ...restCharacter } = formatedCharacter

  return {
    ...restCharacter,
    id: getIdByUrl(url),
  }
}
