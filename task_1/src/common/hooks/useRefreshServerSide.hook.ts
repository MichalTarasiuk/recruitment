import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useTimeout } from 'src/common/hooks/hooks'

type Status = 'refreshing' | 'refreshed' | 'idle' | 'error'

const TIMEOUT_MS = 3000

export const useRefreshServerSide = () => {
  const [status, setState] = useState<Status>('idle')
  const router = useRouter()

  const timeout = useTimeout(TIMEOUT_MS)

  const cleanup = useCallback(() => {
    setState('idle')
  }, [])

  const refreshServerSide = useCallback(async () => {
    try {
      timeout.start(cleanup)

      setState('refreshing')

      await router.replace(router.asPath)

      setState('refreshed')
    } catch {
      setState('error')
    }
  }, [router, timeout, cleanup])

  return [status, refreshServerSide] as const
}
