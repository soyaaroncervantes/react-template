import { M3eButton } from '@m3e/react/button'
import { M3eHeading } from '@m3e/react/heading'
import { M3eList, M3eListItem } from '@m3e/react/list'
import { createFileRoute } from '@tanstack/react-router'
import { useCallback } from 'react'
import { type ThemeType, useThemeStore } from '@/features/theme/theme.stores'

export const Route = createFileRoute('/')({
  component: RootPage,
})

function RootPage() {
  const { setTheme, theme } = useThemeStore()
  const updateTheme = useCallback(
    (theme: ThemeType) => {
      setTheme(theme)
    },
    [setTheme]
  )

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <M3eHeading variant="title" size="medium">
          Stack
        </M3eHeading>
        <M3eList variant="segmented">
          <M3eListItem>TanStack Router</M3eListItem>
          <M3eListItem>M3E Design System</M3eListItem>
          <M3eListItem>Zustand</M3eListItem>
        </M3eList>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <M3eHeading variant="title" size="medium">
          Theme: {theme}
        </M3eHeading>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <M3eButton variant="filled" shape="square" onClick={() => updateTheme('dark')}>
            Dark
          </M3eButton>
          <M3eButton variant="outlined" shape="square" onClick={() => updateTheme('light')}>
            Light
          </M3eButton>
          <M3eButton variant="tonal" shape="square" onClick={() => updateTheme('auto')}>
            Auto
          </M3eButton>
        </div>
      </div>
    </div>
  )
}
