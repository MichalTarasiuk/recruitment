import { object, string, array } from 'zod'

import type Z from 'zod'

export type CharactersSchema = Z.infer<typeof charactersSchema>

const characterSchema = object({
  name: string(),
  height: string(),
  mass: string(),
  hair_color: string(),
  skin_color: string(),
  eye_color: string(),
  birth_year: string(),
  gender: string(),
  homeworld: string(),
  films: array(string()),
  species: array(string()),
  vehicles: array(string()),
  starships: array(string()),
  created: string(),
  edited: string(),
  url: string(),
})

export const charactersSchema = array(characterSchema)
