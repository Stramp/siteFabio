import { Meta, Story } from '@storybook/react/types-6-0'
import TopUtilsBar from '.'

export default {
  title: 'TopUtilsBar',
  component: TopUtilsBar
} as Meta

export const Default: Story = (args) => <TopUtilsBar {...args} />
