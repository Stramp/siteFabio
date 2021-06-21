import { Meta, Story } from '@storybook/react/types-6-0'
import SectionCoach, { SectionCoachProps } from '.'

export default {
  title: 'SectionCoach',
  component: SectionCoach
} as Meta

export const Default: Story<SectionCoachProps> = (args) => (
  <SectionCoach {...args} />
)
