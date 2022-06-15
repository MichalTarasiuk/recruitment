import { RootLayout } from 'src/app/layouts/layouts'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

export const AppFlow = ({ children }: Props) => {
  return <RootLayout>{children}</RootLayout>
}
