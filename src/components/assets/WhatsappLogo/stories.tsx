import { Meta, Story } from '@storybook/react/types-6-0'
import WhatsappLogo, { WhatsappLogoProps } from '.'

export default {
  title: 'WhatsappLogo',
  component: WhatsappLogo
} as Meta

export const basic: Story<WhatsappLogoProps> = (args) => (
  <WhatsappLogo {...args} />
)
