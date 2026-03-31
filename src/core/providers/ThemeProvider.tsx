import { M3eTheme } from '@m3e/react/theme'
import type { PropsWithChildren } from 'react'
import { useThemeStore } from '@/features/theme/theme.stores'

type Props = PropsWithChildren & {}

export const ThemeProvider = ({ children }: Props) => {
  const { theme } = useThemeStore()

  return (
    <M3eTheme scheme={theme} color="#a8e6cf" motion="expressive">
      {children}
    </M3eTheme>
  )
}
