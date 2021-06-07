import { Meta, Story } from '@storybook/react/types-6-0'
import Teste, { TesteProps } from '.'

export default {
  title: 'Teste',
  component: Teste
} as Meta

export const Default: Story<TesteProps> = (args) => (<Teste {...args} />)
