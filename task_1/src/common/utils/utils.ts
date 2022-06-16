export { camelCaseObject } from './camelCaseObject.utility'
export { isString } from './type.utils'
export { fetcher } from './fetcher.utility'
export {
  entries,
  fromEntries,
  mapObject,
  keyInObject,
  pick,
} from './safeObject.utils'

export const uppercaseFirst = (value: string) =>
  value.slice(0, 1).toUpperCase() + value.slice(1)

export const compactArray = <TArray extends ReadonlyArray<unknown>>(
  array: TArray
) =>
  // eslint-disable-next-line functional/prefer-readonly-type -- allow mutating array
  array.filter(Boolean) as unknown as Exclude<TArray[number], Nill>[]

export const getSearchParam = (url: string, key: string) => {
  const urlSearchParams = new URLSearchParams(url.split('?')[1])

  return urlSearchParams.get(key)
}

export const camelCaseToNormal = (value: string) =>
  value
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join(' ')
