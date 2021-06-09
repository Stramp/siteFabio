import { Meta, Story } from '@storybook/react/types-6-0'
import MainBanner, { MainBannerProps } from '.'

export default {
  title: 'MainBanner',
  component: MainBanner
} as Meta

export const Default: Story<MainBannerProps> = (args) => (
  <MainBanner {...args} />
)
