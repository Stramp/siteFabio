import { Meta, Story } from '@storybook/react/types-6-0'
import BoxContact, { BoxContactProps } from '.'

export default {
  title: 'BoxContact',
  component: BoxContact
} as Meta

export const Default: Story<BoxContactProps> = (args) => (
  <BoxContact {...args} />
)
