import { useEffect } from 'react'

import type { EffectCallback } from 'react'

export const useMount = (effectCallback: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps -- hook template
  useEffect(effectCallback, [])
}
