import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './index'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
