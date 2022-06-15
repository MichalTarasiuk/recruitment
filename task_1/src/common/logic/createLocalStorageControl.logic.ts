import { isNill } from 'src/common/utils/utils'

export const createLocalStorageControl = <TItem>(
  name: string,
  fn: (item: TItem | null, value: unknown) => TItem | null
) => {
  const setItem = (value: unknown) => {
    const parsedItem = getItem()
    const nextItem = fn(parsedItem, value)

    if (nextItem) {
      window.localStorage.setItem(name, JSON.stringify(nextItem))
      return
    }
  }

  const getItem = () => {
    const item = window.localStorage.getItem(name)

    if (isNill(item)) {
      return item
    }

    return JSON.parse(item) as TItem
  }

  return { setItem, getItem }
}
