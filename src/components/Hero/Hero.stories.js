import Hero from '.';

export default {
  title: 'Sections/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'this will be our hint title',
  description:
    'this can be a small description of what casbah is doing and it market niche',
};
