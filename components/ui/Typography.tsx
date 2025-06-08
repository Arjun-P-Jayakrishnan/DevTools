import React, { JSX } from 'react'

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps {
  level: HeadingLevels
  children?: React.ReactNode
  className?: string
}

export const Heading = ({ level = 1, children, className = '' }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const baseStyle = 'font-semibold text-foreground'

  const sizeMap: Record<HeadingLevels, string> = {
    '1': 'text-4xl',
    '2': 'text-3xl',
    '3': 'text-2xl',
    '4': 'text-xl',
    '5': 'text-lg',
    '6': 'text-base',
  }

  return <Tag className={`${baseStyle} ${sizeMap[level]} ${className}`}>{children}</Tag>
}

export interface ParagraphProps {
  children?: React.ReactNode
  className?: string
}

export const Paragraph = ({ children, className = '' }: ParagraphProps) => {
  return (
    <p className={`text-base leading-relaxed text-muted-foreground ${className}`}>{children}</p>
  )
}

export interface LabelProps {
  children?: React.ReactNode
  className?: string
}

export const Label = ({ className = '', children }: LabelProps) => {
  return <label className={`font-medium text-foreground ${className}`}>{children}</label>
}
