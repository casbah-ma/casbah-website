import Input from '.';

export default {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'your name',
  placeholder: 'type in your full name',
  type: 'text',
  name: 'name',
  value: 'soufiane Ma',
  onChange: () => {},
};
