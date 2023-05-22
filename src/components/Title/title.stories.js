import Title from '.';
import { titleLevels } from './title.styles';

export default {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    renderAs: {
      options: Object.keys(titleLevels),
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => (
  <Title {...args}>A digital bill is always paid</Title>
);

export const H1 = Template.bind({});
H1.args = {
  renderAs: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  ...H1.args,
  renderAs: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  ...H1.args,
  renderAs: 'h3',
  color: 'red',
};
