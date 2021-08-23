import { Meta, Story } from '@storybook/react/types-6-0'
import FormWhats, { FormWhatsProps } from '.'

export default {
  title: 'FormWhats',
  component: FormWhats
} as Meta

export const Default: Story<FormWhatsProps> = (args) => <FormWhats {...args} />
