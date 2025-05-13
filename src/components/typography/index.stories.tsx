import type { Meta, StoryObj } from '@storybook/react'
import { H1, H2, Body } from './index'

const meta = {
  title: 'Components/Typography',
  tags: ['autodocs'],
  // デフォルトは Body にしておく（任意）
  component: Body,
} satisfies Meta<typeof Body>

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  args: {
    children: 'Heading 1',
  },
  render: (args) => <H1 {...args} />,
}

export const Heading2: Story = {
  args: {
    children: 'Heading 2',
  },
  render: (args) => <H2 {...args} />,
}

export const BodyText: Story = {
  args: {
    children: 'Body text goes here.',
  },
  render: (args) => <Body {...args} />,
}