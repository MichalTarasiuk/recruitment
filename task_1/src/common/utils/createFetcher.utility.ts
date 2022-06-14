const FALLBACK_MESSAGE = 'Something went wrong. Please try again later.'

type SchemaValidator<TContext extends PlainObject, TData> = {
  readonly context: TContext
  readonly resolver: (data: unknown, context: TContext) => TData
}

export const createFetcher = <TContext extends PlainObject, TData>(
  schemaValidator: SchemaValidator<TContext, TData>
) => {
  return async (input: string, requestInit?: RequestInit) => {
    try {
      const response = await fetch(input, requestInit)

      if (response.ok) {
        const data: unknown = await response.json()

        return schemaValidator.resolver(data, schemaValidator.context)
      }

      throw new FetcherError(response.statusText, response.status)
    } catch (error) {
      if (error instanceof FetcherError) {
        throw error
      }

      throw new FetcherError(FALLBACK_MESSAGE, 400)
    }
  }
}

export class FetcherError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message)
    // eslint-disable-next-line functional/no-this-expression -- required for extending error
    this.name = 'FetcherError'
    // eslint-disable-next-line functional/no-this-expression -- required for extending error
    Object.setPrototypeOf(this, FetcherError.prototype)
  }
}
