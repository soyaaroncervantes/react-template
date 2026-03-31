import type { HeadingLevel, HeadingSize, HeadingVariant, M3eHeadingElement } from '@m3e/react/heading'
import type { PropsWithChildren } from 'react'
import { M3eHeading } from '@m3e/react/heading'
import type { ThemeBaseProps } from '../theme.types'

export type TextProps = PropsWithChildren & ThemeBaseProps<M3eHeadingElement> & {
  level?: HeadingLevel
  size?: HeadingSize
  variant?: HeadingVariant
}
 
export const ThemeText = ({ children, ...props }: TextProps) => {
  return <M3eHeading {...props}>{children}</M3eHeading>
}
