import { create, type StoreApi } from 'zustand'
import { withSlices } from 'zustand-slices'
import { createContext } from 'zustand-utils'
import { themeSlice } from '@/features/theme/theme.stores'
import { createDevtools } from './devtools.store'

const store = withSlices(themeSlice)
export type AppStore = ReturnType<typeof store>

const devtools = createDevtools('App')
export const appStore = () => create<AppStore>()(devtools(store))

type AppStoreApi = StoreApi<AppStore>

export const { Provider, useStore } = createContext<AppStoreApi>()
