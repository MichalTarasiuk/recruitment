type PlainObject = Record<PropertyKey, unknown>

type CamelCase<S extends string> = S extends Lowercase<S>
  ? S extends `${infer F}_${infer RF}${infer R}`
    ? `${F}${Uppercase<RF>}${CamelCase<R>}`
    : S
  : CamelCase<Lowercase<S>>

type CamelCaseObject<TObject extends PlainObject> = {
  readonly [Key in keyof TObject as Key extends string
    ? CamelCase<Key>
    : Key]: TObject[Key]
}

type AddKey<
  TObject extends PlainObject,
  TKey extends PropertyKey,
  TValue extends unknown
> = TObject & Record<TKey, TValue>

type PromiseValue<T> = T extends PromiseLike<infer R> ? R : T

type InferServerPropsType<T extends (...args: any) => any> = PromiseValue<
  ReturnType<T>
> extends infer Temp
  ? Temp extends {
      readonly props: infer P
    }
    ? P
    : never
  : never

type Noop = () => void

type Nill = null | undefined
