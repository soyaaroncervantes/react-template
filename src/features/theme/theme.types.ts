import type { ReactWebComponent } from '@lit/react'
import type { ComponentProps, HTMLAttributes } from 'react'

export type ThemeBaseProps<T extends HTMLElement> = ComponentProps<ReactWebComponent<T>> &
  HTMLAttributes<T>
