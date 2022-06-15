import { AppProvider } from 'src/app/app.provider'
import { useProgress } from 'src/app/hooks/hooks'
import { RootLayout } from 'src/app/layouts/layouts'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

export const AppFlow = ({ children }: Props) => {
  useProgress({
    speed: 550,
  })

  return (
    <AppProvider>
      <RootLayout>{children}</RootLayout>
    </AppProvider>
  )
}
