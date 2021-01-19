import { Meta, Story } from '@storybook/react/types-6-0'
import FacebookLogo, { FacebookLogoProps } from '.'

export default {
  title: 'FacebookLogo',
  component: FacebookLogo
} as Meta

export const basic: Story<FacebookLogoProps> = (args) => (
  <FacebookLogo {...args} />
)
