import { RouteChangeProvider } from 'src/app/contexts/contexts'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return <RouteChangeProvider>{children}</RouteChangeProvider>
}
