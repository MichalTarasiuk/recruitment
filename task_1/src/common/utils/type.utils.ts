export const isString = (value: any): value is string =>
  typeof value === 'string'

export const isNill = (value: unknown): value is Nill =>
  value === null || value === undefined
