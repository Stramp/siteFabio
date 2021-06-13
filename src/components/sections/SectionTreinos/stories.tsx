import { Meta, Story } from '@storybook/react/types-6-0'
import SectionTreinos from '.'

export default {
  title: 'SectionTreinos',
  component: SectionTreinos
} as Meta

export const Default: Story = (args) => <SectionTreinos {...args} />
