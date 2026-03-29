import { createSlice } from 'zustand-slices'

export const themeSlice = createSlice({
  name: 'theme',
  value: 'system' as 'light' | 'dark' | 'system',
  actions: {
    setTheme: (theme: 'light' | 'dark' | 'system') => () => theme,
  },
})