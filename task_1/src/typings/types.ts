export type Character = {
  readonly name: string
  readonly height: string
  readonly mass: string
  readonly hair_color: string
  readonly skin_color: string
  readonly url: string
}

export type FormatedCharacter = CamelCaseObject<
  AddKey<Omit<Character, 'id'>, 'id', string>
>
