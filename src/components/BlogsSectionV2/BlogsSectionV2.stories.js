import BlogsSectionV2 from '.';
import * as BlogsCardSTories from '../BlogsCard/BlogsCard.stories';
export default {
  title: 'Sections/BlogsSectionV2',
  component: BlogsSectionV2,
};

const Template = (args) => <BlogsSectionV2 {...args} />;
const blogs = [
  BlogsCardSTories.Version3.args,
  BlogsCardSTories.Version3.args,
  BlogsCardSTories.Version3.args,
  BlogsCardSTories.Version3.args,
  BlogsCardSTories.Version3.args,
  BlogsCardSTories.Version3.args,
];

export const Default = Template.bind({});
Default.args = {
  title:
    'Experience the Joy of Creativity: \n Open Source and Fun Projects from Our Lab',
  subtitle:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
  blogs,
};
