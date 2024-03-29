import PicTop from '.';
import { directions } from './PicTop.styles';

export default {
  title: 'Articles/PicTop',
  component: PicTop,
  argTypes: {
    size: {
      options: Object.keys(directions),
      control: { type: 'radio' },
    },
  },
};

const texts = [
  'Making sure that the content expresses your brand’s personality, while also finding common ground with your audiences is a stepping-stone to better communication.',
  'If you’re already invested in such effort, auditing your content and fine-tuning it for more visibility, understandability, and SEO optimization can wield direct results',
];

const Template = (args) => <PicTop {...args} />;

export const V1 = Template.bind({});
V1.args = {
  img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80',
  title: 'Digital transformation',
  texts,
  variant: 'v1',
};

export const V2 = Template.bind({});
V2.args = {
  ...V1.args,
  variant: 'v2',
};

export const V3 = Template.bind({});
V3.args = {
  ...V1.args,
  variant: 'v3',
};
