import { isNill } from 'src/common/utils/utils'

export const createLocalStorageControl = <TItem>(
  name: string,
  fn: (item: TItem | null, value: unknown) => TItem | null
) => {
  const storage = window.localStorage

  const setItem = (value: unknown) => {
    const parsedItem = getItem()
    const nextItem = fn(parsedItem, value)

    if (nextItem) {
      storage.setItem(name, JSON.stringify(nextItem))
      return
    }
  }

  const getItem = () => {
    const item = storage.getItem(name)

    if (isNill(item)) {
      return item
    }

    return JSON.parse(item) as TItem
  }

  return { setItem, getItem }
}
