import BlogsSection from '.';
import * as BlogsCardSTories from '../BlogsCard/BlogsCard.stories';
export default {
  title: 'Sections/BlogsSection',
  component: BlogsSection,
};

const Template = (args) => <BlogsSection {...args} />;
const blogs = [
  BlogsCardSTories.Version1.args,
  BlogsCardSTories.Version1.args,
  BlogsCardSTories.Version1.args,
  BlogsCardSTories.Version1.args,
  BlogsCardSTories.Version1.args,
  BlogsCardSTories.Version1.args,
  BlogsCardSTories.Version1.args,
];

export const Default = Template.bind({});
Default.args = {
  blogs,
};
