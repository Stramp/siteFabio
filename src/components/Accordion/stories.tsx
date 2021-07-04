import { Meta, Story } from '@storybook/react/types-6-0'
import Accordion from '.'

export default {
  title: 'Accordion',
  component: Accordion
} as unknown as Meta

export const Default: Story = (args) => <Accordion {...args} />
