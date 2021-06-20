import { Meta, Story } from '@storybook/react/types-6-0'
import SectionEbook, { SectionEbookProps } from '.'

export default {
  title: 'SectionEbook',
  component: SectionEbook
} as Meta

export const Default: Story<SectionEbookProps> = (args) => (
  <SectionEbook {...args} />
)
