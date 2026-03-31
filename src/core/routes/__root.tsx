import { M3eHeading } from '@m3e/react/heading'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AppProvider } from '../providers/AppProvider'

export const Route = createRootRoute({
  component: () => (
    <AppProvider>
      <M3eHeading variant="display" size="large" style={{ padding: '5rem', paddingBlockEnd: '1rem' }}>
        React Template
      </M3eHeading>
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </AppProvider>
  ),
})
