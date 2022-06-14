import CamelCase from 'camelcase'
import { mapObject, isString } from 'src/common/utils/utils'

export const camelCaseObject = <TObject extends PlainObject>(object: TObject) =>
  mapObject(object, (key, value) =>
    isString(key) ? [CamelCase(key), value] : [key, value]
  ) as unknown as CamelCaseObject<TObject>
