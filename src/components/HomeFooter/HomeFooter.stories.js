import HomeFooter from '.';

export default {
  title: 'Components/HomeFooter',
  component: HomeFooter,
};

const Template = (args) => <HomeFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  description:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
};
