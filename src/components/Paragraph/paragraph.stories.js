import Paragraph from '.';
import { sizes } from './paragraph.styles';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    size: {
      options: Object.keys(sizes),
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Paragraph {...args}>hey</Paragraph>;

export const Meduim = Template.bind({});
Meduim.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  ...Meduim.args,
  size: 'lg',
};
