import type { PropsWithChildren } from 'react'
import { createContext } from 'zustand-utils'
import { useAppStore } from '../stores/app.store'

const { Provider } = createContext()

type Props = PropsWithChildren & {}

export const StoreProvider = ({ children }: Props) => (
  <Provider createStore={useAppStore}>{children}</Provider>
)
