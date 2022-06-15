export const getSearchParam = (url: string, key: string) => {
  const urlSearchParams = new URLSearchParams(url.split('?')[1])

  return urlSearchParams.get(key)
}
