import { Meta, Story } from '@storybook/react/types-6-0'
import BoxDiferenciais, { BoxDiferenciaisProps } from '.'
const diferenciaisList = [
  {
    img: 'https://picsum.photos/400/100?random=1',
    txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasstandard dummy text ever since the 1500s,'
  },
  {
    img: 'https://picsum.photos/500/300?random=2',
    txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ,'
  },
  {
    img: 'https://picsum.photos/500/200?random=3',
    txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip's standard dummy text ever since the 1500s"
  },
  {
    img: 'https://picsum.photos/400/100?random=4',
    txt: "Lorem Ipsum is simply dummy text of the printing and . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  }
]
export default {
  title: 'BoxDiferenciais',
  component: BoxDiferenciais,
  args: { list: diferenciaisList }
} as Meta

export const Default: Story<BoxDiferenciaisProps> = (args) => (
  <BoxDiferenciais {...args} />
)
