import type { FC, ReactNode } from 'react'
import styles from './index.module.css'

type TypographyProps = {
  children: ReactNode
}

export const H1: FC<TypographyProps> = ({ children }) => (
  <h1 className={`${styles.typography} ${styles.h1}`}>{children}</h1>
)

export const H2: FC<TypographyProps> = ({ children }) => (
  <h2 className={`${styles.typography} ${styles.h2}`}>{children}</h2>
)

export const Body: FC<TypographyProps> = ({ children }) => (
  <p className={`${styles.typography} ${styles.body}`}>{children}</p>
)