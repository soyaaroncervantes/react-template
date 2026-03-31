import { M3eButton } from '@m3e/react/button'
import { M3eCard } from '@m3e/react/card'
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
    <div
      style={{
        padding: '1rem',
        margin: '1rem',
        borderRadius: '1rem',
        display: 'flex',
        gap: '2rem',
        backgroundColor: 'var(--md-sys-color-surface)',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: '1rem' }}>
        <M3eHeading variant="title">Stack</M3eHeading>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <M3eCard>
            <M3eHeading slot="header" variant="title" size="large">
              Routing & API
            </M3eHeading>
            <div slot="content">
              <M3eList variant="segmented">
                <M3eListItem>TanStack Router</M3eListItem>
                <M3eListItem>TanStack Query</M3eListItem>
              </M3eList>
            </div>
          </M3eCard>
          <M3eCard>
            <M3eHeading slot="header" variant="title" size="large">
              State Management
            </M3eHeading>
            <div slot="content">
              <M3eList variant="segmented">
                <M3eListItem>Zustand</M3eListItem>
                <M3eListItem>Zustand Utils</M3eListItem>
                <M3eListItem>Zustand Slice</M3eListItem>
              </M3eList>
            </div>
          </M3eCard>
          <M3eCard>
            <M3eHeading slot="header" variant="title" size="large">
              UI Library
            </M3eHeading>
            <div slot="content">
              <M3eList variant="segmented">
                <M3eListItem>M3E</M3eListItem>
                <M3eListItem>lit/react</M3eListItem>
              </M3eList>
            </div>
          </M3eCard>
          <M3eCard>
            <M3eHeading slot="header" variant="title" size="large">
              Testing
            </M3eHeading>
            <div slot="content">
              <M3eList variant="segmented">
                <M3eListItem>Vitest</M3eListItem>
                <M3eListItem>React Testing Library</M3eListItem>
              </M3eList>
            </div>
          </M3eCard>
          <M3eCard>
            <M3eHeading slot="header" variant="title" size="large">
              Bundler & Package Manager
            </M3eHeading>
            <div slot="content">
              <M3eList variant="segmented">
                <M3eListItem>Bun</M3eListItem>
                <M3eListItem>Vite</M3eListItem>
              </M3eList>
            </div>
          </M3eCard>
          <M3eCard>
            <M3eHeading slot="header" variant="title" size="large">
              Linter & Formatter
            </M3eHeading>
            <div slot="content">
              <M3eList variant="segmented">
                <M3eListItem>Biome</M3eListItem>
              </M3eList>
            </div>
          </M3eCard>
        </div>
      </div>
    </div>
  )
}
