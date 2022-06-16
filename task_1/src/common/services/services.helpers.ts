import { compactArray, last } from 'src/common/utils/utils'

export const BASE_URL = 'https://swapi.dev/api'

export const characterKeysToPick = [
  'name',
  'height',
  'mass',
  'hairColor',
  'skinColor',
  'url',
]

export const getIdByUrl = (url: string) => last(compactArray(url.split('/')))
