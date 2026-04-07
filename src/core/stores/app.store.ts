import { create, type StoreApi } from 'zustand'
import { withSlices } from 'zustand-slices'
import { createContext } from 'zustand-utils'
import { apiClientsSlice } from '@/features/clients/api.stores'
import { themeSlice } from '@/features/theme/theme.stores'
import { createDevtools } from './devtools.store'

const storeConfig = withSlices(themeSlice, apiClientsSlice)
export type AppStore = ReturnType<typeof storeConfig>

const devtools = createDevtools('App')
export const createStore = () => create<AppStore>()(devtools(storeConfig))

type AppStoreApi = StoreApi<AppStore>

export const { Provider, useStore } = createContext<AppStoreApi>()
