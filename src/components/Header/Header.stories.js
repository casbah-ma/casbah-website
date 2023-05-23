import Header from '.';

export default {
  title: 'Common/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'clients',
  description:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
};

export const WithLine = Template.bind({});
WithLine.args = {
  ...Default.args,
  withLine: true,
};
