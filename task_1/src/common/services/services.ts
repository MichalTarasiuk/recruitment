import { fetcher, camelCaseObject } from 'src/common/utils/utils'

import type { Character } from 'src/typings/types'

const BASE_URL = 'https://swapi.dev/api'

type Data = {
  readonly results: readonly Character[]
  readonly next: string | null
  readonly previous: string | null
}

export const fetchCharacters = async (pageNumber: string) => {
  const { previous, next, results } = await fetcher<Data>(
    `${BASE_URL}/people/?page=${pageNumber}`
  )

  const characters = results.map(camelCaseObject)

  return {
    previous,
    next,
    characters,
  }
}
