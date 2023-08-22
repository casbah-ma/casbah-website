import AboutHero from '.';

export default {
  title: 'Sections/AboutHero',
  component: AboutHero,
};

const Template = (args) => <AboutHero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'this will be our hint title',
  description:
    'this can be a small description of what casbah is doing and it market niche',
};
