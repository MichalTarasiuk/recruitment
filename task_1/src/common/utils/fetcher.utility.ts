import type { PlainObject } from 'src/typings/global'

const FALLBACK_MESSAGE = 'Something went wrong. Please try again later.'

export const fetcher = async <TData extends PlainObject>(
  input: RequestInfo,
  init?: RequestInit
) => {
  try {
    const response = await fetch(input, init)

    if (response.ok) {
      return response.json() as unknown as TData
    }

    throw new ResponseError(response.statusText, response.status)
  } catch (error) {
    if (error instanceof ResponseError) {
      throw error
    }

    throw new ResponseError(FALLBACK_MESSAGE, 400)
  }
}

export class ResponseError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message)
    // eslint-disable-next-line functional/no-this-expression -- required for extending error
    this.name = 'ResponseError'
    // eslint-disable-next-line functional/no-this-expression -- required for extending error
    Object.setPrototypeOf(this, ResponseError.prototype)
  }
}
