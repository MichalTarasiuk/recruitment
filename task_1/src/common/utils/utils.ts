export { camelCaseObject } from './camelCaseObject.utility'
export { entries, fromEntries, mapObject } from './safeObject.utils'
export { isString } from './type.utils'

export const uppercaseFirst = (value: string) =>
  value.slice(0, 1).toUpperCase() + value.slice(1)

export const compactArray = <TItem>(array: readonly TItem[]) =>
  array.filter(Boolean) as unknown as readonly Exclude<TItem, FalsyValues>[]
