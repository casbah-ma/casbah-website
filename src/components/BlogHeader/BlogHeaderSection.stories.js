import BlogHeader from '.';

export default {
  title: 'Blogs/BlogHeader',
  component: BlogHeader,
};

export const Default = (args) => <BlogHeader {...args} />;

Default.args = {
  title:
    'this can be used as our titles this can be a descriptive title with a lot of words',
  description:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
  image:
    'https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
  tags: ['Ux design', 'Ui design', 'copywriting', 'codeing'],
};
