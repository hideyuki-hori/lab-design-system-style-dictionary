import { FC, ButtonHTMLAttributes } from 'react'
import styles from './index.module.css'

export const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <button className={`${styles.button} ${styles.primary} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export const SecondaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <button className={`${styles.button} ${styles.secondary} ${className}`} {...rest}>
      {children}
    </button>
  )
}