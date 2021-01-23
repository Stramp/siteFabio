import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import ButtonCta, { ButtonCtaProps } from '.'

export default {
  title: 'ButtonCta',
  component: ButtonCta,
  children: React
} as Meta

export const Default: Story<ButtonCtaProps> = (args) => <ButtonCta {...args} />
Default.args = {
  children: 'Ver Planos'
}
