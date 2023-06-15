import AnimatedDisplay from '.';
import { titleLevels } from './AnimatedDisplay.styles';

export default {
  title: 'Typography/AnimatedDisplay',
  component: AnimatedDisplay,
  argTypes: {
    size: {
      options: Object.keys(titleLevels),
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => (
  <AnimatedDisplay {...args}>A digital bill is always paid</AnimatedDisplay>
);

export const Large = Template.bind({});
Large.args = {
  renderAs: 'h1',
  size: 'lg',
  text: 'This is a project title',
};
