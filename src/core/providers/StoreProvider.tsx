import type { PropsWithChildren } from 'react'
import { appStore, Provider } from '@/core/stores/app.store'

type Props = PropsWithChildren & {}

export const StoreProvider = ({ children }: Props) => (
  <Provider createStore={appStore}>{children}</Provider>
)
