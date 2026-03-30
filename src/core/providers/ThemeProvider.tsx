import { M3eTheme } from '@m3e/react/theme'
import type { ReactNode } from 'react'
import { useThemeStore } from '@/features/theme/theme.stores'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useThemeStore()

  return (
    <M3eTheme scheme={theme} color="#6750A4" motion="expressive">
      {children}
    </M3eTheme>
  )
}
