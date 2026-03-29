import { M3eButton } from '@m3e/react/button'
import { M3eCard } from '@m3e/react/card'
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
      <M3eButton variant="tonal" shape="square" onClick={() => updateTheme('auto')}>
        Auto
      </M3eButton>
      <M3eCard>
        <p>Tema actual: {theme}</p>
      </M3eCard>
    </div>
  )
}
