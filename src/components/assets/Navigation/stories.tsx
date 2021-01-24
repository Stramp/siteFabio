import { Meta, Story } from '@storybook/react/types-6-0'
import Navigation, { NavigationProps } from '.'

export default {
  title: 'Navigation',
  component: Navigation
} as Meta

export const Default: Story<NavigationProps> = (args) => (
  <Navigation {...args} />
)
