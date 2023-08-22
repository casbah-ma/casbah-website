import TopButton from '.';

export default {
  title: 'Common/TopButton',
  component: TopButton,

  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <TopButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
