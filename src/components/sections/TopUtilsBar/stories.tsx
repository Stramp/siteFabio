import { Meta, Story } from '@storybook/react/types-6-0'
import TopUtilsBar, { TopUtilsBarProps } from '.'

export default {
  title: 'TopUtilsBar',
  component: TopUtilsBar
} as Meta

export const Default: Story<TopUtilsBarProps> = (args) => (
  <TopUtilsBar {...args} />
)
