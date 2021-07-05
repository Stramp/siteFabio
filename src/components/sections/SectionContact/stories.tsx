import { Meta, Story } from '@storybook/react/types-6-0'
import SectionContact from '.'

export default {
  title: 'SectionContact',
  component: SectionContact
} as Meta

export const Default: Story = (args) => <SectionContact {...args} />
