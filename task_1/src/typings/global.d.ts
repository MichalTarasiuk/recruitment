type PlainObject = Record<PropertyKey, unknown>

type PlainFunction = (...args: readonly any[]) => unknown

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
