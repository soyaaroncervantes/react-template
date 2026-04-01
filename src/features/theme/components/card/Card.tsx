import { M3eCard } from '@m3e/react/card'
import type { ComponentProps, PropsWithChildren } from 'react'
import { ThemeCardActions } from './CardActions'
import { ThemeCardContent } from './CardContent'
import { ThemeCardFooter } from './CardFooter'
import { ThemeCardHeader } from './CardHeader'

export type ThemeCardProps = PropsWithChildren & ComponentProps<typeof M3eCard> & {}

export const ThemeCard = ({ children, ...props }: ThemeCardProps) => {
  return <M3eCard {...props}>{children}</M3eCard>
}

ThemeCard.Header = ThemeCardHeader
ThemeCard.Content = ThemeCardContent
ThemeCard.Actions = ThemeCardActions
ThemeCard.Footer = ThemeCardFooter
