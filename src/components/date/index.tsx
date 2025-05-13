import { createElement } from 'react'

export function YyyyMmDd(p: {
  as: string
  date: Date
}) {
  const text = p.date.toISOString().slice(0, 10)
  return createElement(p.as, { children: text })
}

export function YyyyMmDdHhMiSs(p: {
  as: string
  date: Date
}) {
  const d = p.date
  const pad = (n: number) => String(n).padStart(2, '0')
  const text =
    d.getFullYear().toString() + '/' +
    pad(d.getMonth() + 1) + '/' +
    pad(d.getDate()) + ' ' +
    pad(d.getHours()) + ':' +
    pad(d.getMinutes()) + ':' +
    pad(d.getSeconds())
  return createElement(p.as, { children: text })
}