import { AppProvider } from 'src/app/app.provider'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

export const AppFlow = ({ children }: Props) => {
  return <AppProvider>{children}</AppProvider>
}
