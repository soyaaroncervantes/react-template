import { M3eHeading } from '@m3e/react/heading'
import { createFileRoute } from '@tanstack/react-router'
import themeStyles from '@/features/theme/theme.module.css'

export const Route = createFileRoute('/_rootLayout')({
  component: RootPage,
})

function RootPage() {
  return (
    <div className={themeStyles.base}>
      <M3eHeading
        variant="display"
        size="large"
        style={{ padding: '5rem', paddingBlockEnd: '1rem' }}
      >
        Project Template
      </M3eHeading>
    </div>
  )
}
