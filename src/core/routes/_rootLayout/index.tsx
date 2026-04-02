import { createFileRoute } from '@tanstack/react-router'
import { Theme } from '@/features/theme/components'

export const Route = createFileRoute('/_rootLayout/')({
  component: IndexPage,
})

function IndexPage() {
  return (
    <Theme.Text variant="display" size="large">
      Project Template
    </Theme.Text>
  )
}
