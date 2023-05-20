import Button from '.';
import { variants } from './Button.styles';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: Object.keys(variants),
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args}>Send</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
