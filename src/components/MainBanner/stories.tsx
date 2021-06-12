import { Meta, Story } from '@storybook/react/types-6-0'
import MainBanner from '.'

export default {
  title: 'MainBanner',
  component: MainBanner
} as Meta

export const Default: Story = (args: JSX.IntrinsicAttributes) => (
  <MainBanner {...args} />
)
