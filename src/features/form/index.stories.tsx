import type { Meta, StoryObj } from '@storybook/react'
import { Form } from './index'

const meta = {
  title: 'Features/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta

export const Default: StoryObj<typeof Form> = {
  render: () => <Form />,
}
