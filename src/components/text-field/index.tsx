import { FC, InputHTMLAttributes } from 'react'
import styles from './index.module.css'

export const TextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => {
  return <input type="text" className={`${styles.textField} ${className}`} {...props} />
}
