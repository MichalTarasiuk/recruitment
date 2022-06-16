import { useEffect, useRef } from 'react'

import type { EffectCallback } from 'react'

export const useBeforeFirstMount = (fn: Noop) => {
  const isFirstMount = useRef(true)

  if (isFirstMount.current) {
    fn()
  }

  useMount(() => {
    isFirstMount.current = false
  })
}

export const useMount = (effectCallback: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps -- hook template
  useEffect(effectCallback, [])
}
