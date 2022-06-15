/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

const is = (x: any, y: any) => {
  return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y)
}

const objectIs: (x: unknown, y: unknown) => boolean =
  typeof Object.is === 'function' ? Object.is : is

export const areHookInputsEqual = (
  nextDeps: ReadonlyArray<unknown>,
  prevDeps: ReadonlyArray<unknown> | null
) => {
  if (prevDeps === null) {
    return false
  }

  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue
    }
    return false
  }

  return true
}
