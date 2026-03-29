import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from '../routeTree.gen'
import { QueryProvider } from './providers/QueryProvider'
import { StoreProvider } from './providers/StoreProvider'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <StoreProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </StoreProvider>
  </StrictMode>
)
