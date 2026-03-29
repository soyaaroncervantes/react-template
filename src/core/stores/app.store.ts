import { create } from 'zustand'
import { withSlices } from 'zustand-slices'
import { themeSlice } from '@/features/theme/theme.stores'

export const useAppStore = create(withSlices(themeSlice))
