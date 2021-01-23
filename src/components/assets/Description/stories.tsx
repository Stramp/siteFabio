import { Meta, Story } from '@storybook/react/types-6-0'
import Description, { DescriptionProps } from '.'

export default {
  title: 'Description',
  component: Description
} as Meta

export const Default: Story<DescriptionProps> = (args) => (
  <Description {...args} />
)
