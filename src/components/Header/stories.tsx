import { Meta, Story } from '@storybook/react/types-6-0'
import Header from '.'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const basic: Story = () => <Header />
