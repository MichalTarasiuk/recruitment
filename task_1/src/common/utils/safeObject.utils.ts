export const entries = <TObject extends PlainObject>(obj: TObject) =>
  Object.entries(obj) as readonly (readonly [
    keyof TObject,
    TObject[keyof TObject]
  ])[]

export const fromEntries = <
  TArr extends readonly (readonly [PropertyKey, unknown])[]
>(
  arr: TArr
) => {
  return Object.fromEntries(arr) as Record<TArr[number][0], TArr[number][1]>
}

export const mapObject = <TObject extends PlainObject>(
  obj: TObject,
  fn: (
    key: keyof TObject,
    value: TObject[keyof TObject]
  ) => readonly [keyof TObject, TObject[keyof TObject]]
) => fromEntries(entries(obj).map(([key, value]) => fn(key, value)))

export const keyInObject = <TObject extends PlainObject>(
  object: TObject,
  key: PropertyKey
): key is keyof TObject => key in object

export const filterObject = <TObject extends PlainObject>(
  object: TObject,
  fn: (key: keyof TObject, value: TObject[keyof TObject]) => boolean
) =>
  fromEntries(
    entries(object).filter(([key, value]) => fn(key, value))
  ) as TObject

export const pick = <TObject extends PlainObject>(
  object: TObject,
  keys: readonly PropertyKey[]
) => filterObject(object, (key) => keys.includes(key))
