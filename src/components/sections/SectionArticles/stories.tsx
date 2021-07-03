import { Meta, Story } from '@storybook/react/types-6-0'
import SectionArticles from '.'

export default {
  title: 'SectionArticles',
  component: SectionArticles
} as Meta

export const Default: Story = (args) => <SectionArticles {...args} />
