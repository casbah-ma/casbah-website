import SimilarBlog from '.';
import * as BlogCardStories from '../../BlogsCard/BlogsCard.stories';

export default {
  title: 'Sections/SimilarBlog',
  component: SimilarBlog,
};

export const Default = (args) => <SimilarBlog {...args} />;

Default.args = {
  blogs: [
    BlogCardStories.Version2.args,
    BlogCardStories.Version2.args,
    BlogCardStories.Version2.args,
    BlogCardStories.Version2.args,
    BlogCardStories.Version2.args,
    BlogCardStories.Version2.args,
  ],
};
