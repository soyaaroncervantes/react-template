import type { PropsWithChildren } from 'react'
import { createStore, Provider } from '@/core/stores/app.store'

type Props = PropsWithChildren & {}

export const StoreProvider = ({ children }: Props) => (
  <Provider createStore={createStore}>{children}</Provider>
)
