import Layout from '.';

export default {
  title: 'Components/Layout',
  component: Layout,
};

const Template = (args) => <Layout {...args}>Hello</Layout>;

export const Default = Template.bind({});
Default.args = {};
