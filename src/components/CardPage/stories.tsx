import { Meta, Story } from '@storybook/react/types-6-0'
import CardPage, { CardPageProps } from '.'

export default {
  title: 'CardPage',
  component: CardPage
} as Meta

export const Default: Story<CardPageProps> = (args) => <CardPage {...args} />
