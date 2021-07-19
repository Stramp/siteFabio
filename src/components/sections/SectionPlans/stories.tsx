import { Meta, Story } from '@storybook/react/types-6-0'
import SectionPlans, { SectionPlansProps } from '.'

export default {
  title: 'SectionPlans',
  component: SectionPlans
} as Meta

export const Default: Story<SectionPlansProps> = (args) => (
  <SectionPlans {...args} />
)
