import { useRouter } from 'next/router'
import { useState, useMemo } from 'react'
import { useMount } from 'src/common/hooks/hooks'
import { createSafeContext } from 'src/common/logic/logic'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

type Status = 'idle' | 'pending'

const [RouteChangeProviderImpl, useRouteChange] = createSafeContext<{
  readonly status: Status
}>('routeChange')

const RouteChangeProvider = ({ children }: Props) => {
  const [status, setStatus] = useState<Status>('idle')
  const router = useRouter()

  useMount(() => {
    const onStart = () => {
      setStatus('pending')
    }
    const onComplete = () => {
      setStatus('idle')
    }

    router.events.on('routeChangeStart', onStart)
    router.events.on('routeChangeComplete', onComplete)
    router.events.on('routeChangeError', onComplete)

    return () => {
      router.events.off('routeChangeStart', onStart)
      router.events.off('routeChangeComplete', onComplete)
      router.events.off('routeChangeError', onComplete)
    }
  })

  const value = useMemo(() => ({ status }), [status])

  return (
    <RouteChangeProviderImpl value={value}>{children}</RouteChangeProviderImpl>
  )
}

export { RouteChangeProvider, useRouteChange }
