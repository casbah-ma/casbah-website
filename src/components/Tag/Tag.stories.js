import Tag from '.';

export default {
  title: 'Common/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'copywriting',
};
