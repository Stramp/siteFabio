import { Meta, Story } from '@storybook/react/types-6-0'
import BoxContact from '.'

export default {
  title: 'BoxContact',
  component: BoxContact
} as Meta

export const Default: Story = (args) => <BoxContact {...args} />
