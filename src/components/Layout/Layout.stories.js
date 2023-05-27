import Layout from '.';

export default {
  title: 'Common/Layout',
  component: Layout,
};

const Template = (args) => <Layout {...args}>Hello</Layout>;

export const Default = Template.bind({});
Default.args = {};
