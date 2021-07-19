import { Meta, Story } from '@storybook/react/types-6-0'
import CardsList, { CardsListProps } from '.'

export default {
  title: 'CardsList',
  component: CardsList
} as Meta

export const Default: Story<CardsListProps> = (args) => <CardsList {...args} />
