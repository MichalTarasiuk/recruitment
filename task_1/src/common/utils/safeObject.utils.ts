export const entries = <TObject extends Record<PropertyKey, unknown>>(
  obj: TObject
) =>
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

export const mapObject = <TObject extends Record<PropertyKey, unknown>>(
  obj: TObject,
  fn: (
    key: keyof TObject,
    value: TObject[keyof TObject]
  ) => readonly [keyof TObject, TObject[keyof TObject]]
) => fromEntries(entries(obj).map(([key, value]) => fn(key, value)))