import { Meta, Story } from '@storybook/react/types-6-0'
import Cards, { CardsProps } from '.'

export default {
  title: 'Cards',
  component: Cards
} as Meta

export const Default: Story<CardsProps> = (args) => <Cards {...args} />
