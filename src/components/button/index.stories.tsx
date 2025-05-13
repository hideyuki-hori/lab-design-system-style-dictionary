// src/components/button/index.stories.ts
import type { Meta, StoryObj } from '@storybook/react'
import { PrimaryButton, SecondaryButton } from './index'

const meta = {
  title: 'Components/Button',
  component: PrimaryButton,
  tags: ['autodocs'],
} satisfies Meta<typeof PrimaryButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => <PrimaryButton {...args}>Primary Button</PrimaryButton>,
}

export const Secondary: Story = {
  render: (args) => <SecondaryButton {...args}>Secondary Button</SecondaryButton>,
}