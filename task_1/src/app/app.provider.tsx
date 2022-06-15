import { Provider as ReduxProvider } from 'react-redux'
import { RouteChangeProvider } from 'src/app/contexts/contexts'
import { store } from 'src/common/store/store'

import type { ReactNode } from 'react'

type Props = {
  readonly children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <RouteChangeProvider>{children}</RouteChangeProvider>
    </ReduxProvider>
  )
}
