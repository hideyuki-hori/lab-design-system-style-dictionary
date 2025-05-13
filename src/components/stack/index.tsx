import { FC, ReactNode } from 'react'
import styles from './index.module.css'

type Direction = 'horizontal' | 'vertical'

type StackProps = {
  direction?: Direction
  gap?: number | string // これもxs | smみたいにしたい
  children: ReactNode
  className?: string
}

export const Stack: FC<StackProps> = ({
  direction = 'vertical',
  gap = 0,
  children,
  className = '',
}) => {
  const directionClass =
    direction === 'horizontal' ? styles.horizontal : styles.vertical
  const gapClass =
    typeof gap === 'string' && styles[`gap-${gap}`]
  const classes = [styles.stack, directionClass, gapClass, className]
    .filter(Boolean)
    .join(' ')

  const style = typeof gap === 'number' ? { gap: `${gap}px` } : undefined

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}