import BlogsHero from '.';

export default {
  title: 'Components/BlogsHero',
  component: BlogsHero,
};

const Template = (args) => <BlogsHero {...args}>hey</BlogsHero>;

export const Default = Template.bind({});
Default.args = {
  title: 'our work',
  description:
    'Constructing the brand’s narrative and putting together the right multi-format content, to be distributed in the appropriate channels, should be among any organization’s top priorities to get the word out.',
  specialLine: 'to be distributed in the appropriate channels, should',
};
