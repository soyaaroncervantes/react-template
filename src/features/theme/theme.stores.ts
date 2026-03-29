import { createSlice } from 'zustand-slices'
import { useStore } from '@/core/stores/app.store'

export type ThemeType = 'light' | 'dark' | 'system'

export const themeSlice = createSlice({
  name: 'theme',
  value: 'system' satisfies ThemeType,
  actions: {
    setTheme: (theme: ThemeType) => () => theme,
  },
})

export type ThemeSlice = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

export const useThemeStore = () =>
  useStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }))
