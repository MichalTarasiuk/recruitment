export { camelCaseObject } from './camelCaseObject.utility'
export { isString } from './type.utils'
export { fetcher } from './fetcher.utility'
export { getSearchParam } from './getQueryValue'
export {
  entries,
  fromEntries,
  mapObject,
  keyInObject,
} from './safeObject.utils'

export const uppercaseFirst = (value: string) =>
  value.slice(0, 1).toUpperCase() + value.slice(1)

export const compactArray = <TArray extends ReadonlyArray<unknown>>(
  array: TArray
) => array.filter(Boolean) as unknown as TArray
