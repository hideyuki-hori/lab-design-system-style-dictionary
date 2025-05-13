import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './index'

const meta = {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    gap: 'md',
    children: (
      <>
        <div style={{ background: '#eee' }}>Item 1</div>
        <div style={{ background: '#eee' }}>Item 2</div>
        <div style={{ background: '#eee' }}>Item 3</div>
      </>
    ),
  },
}

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    gap: 'lg',
    children: (
      <>
        <div style={{ background: '#def' }}>Item A</div>
        <div style={{ background: '#def' }}>Item B</div>
        <div style={{ background: '#def' }}>Item C</div>
      </>
    ),
  },
}