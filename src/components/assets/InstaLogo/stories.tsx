import { Meta, Story } from '@storybook/react/types-6-0'
import InstaLogo, { InstaLogoProps } from '.'

export default {
  title: 'InstaLogo',
  component: InstaLogo
} as Meta

export const basic: Story<InstaLogoProps> = (args) => <InstaLogo {...args} />
