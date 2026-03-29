import type { ColorScheme as ThemeType } from '@m3e/react/theme'
import { createSlice } from 'zustand-slices'
import { useStore } from '@/core/stores/app.store'

export const themeSlice = createSlice({
  name: 'theme',
  value: 'auto' as ThemeType,
  actions: {
    setTheme: (theme: ThemeType) => () => theme,
  },
})

export type ThemeSlice = {
  theme: ThemeType,
  setTheme: (theme: ThemeType) => void
}

export const useThemeStore = () =>
  useStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }))

export type { ThemeType }
