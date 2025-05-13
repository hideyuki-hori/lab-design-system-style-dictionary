import type { Meta, StoryObj } from '@storybook/react'
import { YyyyMmDd, YyyyMmDdHhMiSs } from './index'

const meta = {
  title: 'Components/Date',
  component: YyyyMmDd,
  tags: ['autodocs'],
} satisfies Meta<typeof YyyyMmDd>

export default meta

type Story = StoryObj<typeof meta>

const now = new Date()

export const YyyyMmDdStory: Story = {
  render: (args) => <YyyyMmDd {...args} date={now} />,
  args: {
    as: 'span',
    date: new Date(),
  },
}

export const YyyyMmDdHhMiSsStory: Story = {
  render: (args) => <YyyyMmDdHhMiSs {...args} date={now} />,
  args: {
    as: 'span',
    date: new Date(),
  },
}