import { M3eTheme } from '@m3e/react/theme'
import type { PropsWithChildren } from 'react'
import themeStyles from '@/features/theme/theme.module.css'
import { useThemeStore } from '@/features/theme/theme.stores'

type Props = PropsWithChildren & {}

export const ThemeProvider = ({ children }: Props) => {
  const { theme } = useThemeStore()

  return (
    <M3eTheme scheme={theme} color="#a8e6cf" motion="expressive">
      <div className={themeStyles.base}>{children}</div>
    </M3eTheme>
  )
}
