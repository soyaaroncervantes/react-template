import { M3eButton } from '@m3e/react/button'
import { M3eTextHighlight } from '@m3e/react/core'
import { useCallback } from 'react'
import { type ThemeType, useThemeStore } from '@/features/theme/theme.stores'

export const HomePage = () => {
  const { setTheme, theme } = useThemeStore()
  const updateTheme = useCallback(
    (theme: ThemeType) => {
      setTheme(theme)
    },
    [setTheme]
  )

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '1rem', flexGrow: 1 }}>
      <M3eButton variant="filled" shape="square" onClick={() => updateTheme('dark')}>
        Dark
      </M3eButton>
      <M3eButton variant="outlined" shape="square" onClick={() => updateTheme('light')}>
        Light
      </M3eButton>
      <M3eButton variant="tonal" shape="square" onClick={() => updateTheme('system')}>
        System
      </M3eButton>
      <M3eTextHighlight>Current theme: {theme}</M3eTextHighlight>
    </div>
  )
}
