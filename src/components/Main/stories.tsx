import { Meta, Story } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const basic: Story = () => <Main title={text('Title', 'Produzindo')} />
