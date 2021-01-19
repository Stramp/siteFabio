import { Meta, Story } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />
