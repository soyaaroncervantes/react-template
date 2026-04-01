import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Theme } from '@/features/theme/components'
import themeStyles from '@/features/theme/theme.module.css'

export const Route = createFileRoute('/_rootLayout')({
  component: RootPage,
})

function RootPage() {
  return (
    <div className={themeStyles.base}>
      <Theme.Text
        variant="display"
        size="large"
        style={{ padding: '5rem', paddingBlockEnd: '1rem' }}
      >
        Project Template
      </Theme.Text>
      <Outlet />
    </div>
  )
}
