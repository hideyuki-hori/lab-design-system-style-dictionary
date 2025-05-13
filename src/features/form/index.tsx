import { FC } from 'react'
import { PrimaryButton, SecondaryButton } from '../../components/button'
import { TextField } from '../../components/text-field'
import { Stack } from '../../components/stack'

export const Form: FC = () => {
  return (
    <form>
      <Stack gap={12}>
        <TextField placeholder="Name" />
        <TextField placeholder="Email" type="email" />
        <Stack direction="horizontal" gap={8}>
          <PrimaryButton type="submit">Submit</PrimaryButton>
          <SecondaryButton type="reset">Reset</SecondaryButton>
        </Stack>
      </Stack>
    </form>
  )
}