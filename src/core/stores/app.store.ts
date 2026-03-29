import { create } from 'zustand'
import { withSlices } from 'zustand-slices'
import { themeSlice } from '@/features/theme/theme.stores'
import { createDevtools } from './devtools.store'

const devtools = createDevtools('App')
const store = withSlices(themeSlice)

export const appStore = () => create(devtools(store))
