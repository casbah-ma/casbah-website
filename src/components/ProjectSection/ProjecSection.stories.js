import ProjecSection from '.';

export default {
  title: 'Components/ProjecSection',
  component: ProjecSection,
};

const Template = (args) => <ProjecSection {...args}>hey</ProjecSection>;

export const Default = Template.bind({});
Default.args = {
  title: 'this is a project title',
  tags: ['React', 'Next', 'tailwind', 'UX/UI'],
  image:
    'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80',
};
