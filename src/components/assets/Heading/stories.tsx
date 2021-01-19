import { Meta, Story } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    prevTit: {
      type: 'string'
    },
    posTit: {
      type: 'string'
    },
    sizeLine: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />
Default.args = {
  prevTit: 'Titulo',
  posTit: 'Sessao'
}
