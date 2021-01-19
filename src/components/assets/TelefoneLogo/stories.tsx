import { Meta, Story } from '@storybook/react/types-6-0'
import TelefoneLogo, { TelefoneLogoProps } from '.'

export default {
  title: 'TelefoneLogo',
  component: TelefoneLogo
} as Meta

export const basic: Story<TelefoneLogoProps> = (args) => (
  <TelefoneLogo {...args} />
)
