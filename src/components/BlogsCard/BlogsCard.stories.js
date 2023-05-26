import BlogsCard from '.';

export default {
  title: 'Components/BlogsCard',
  component: BlogsCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <BlogsCard {...args} />;

export const Version1 = Template.bind({});
export const Version2 = Template.bind({});
export const Version3 = Template.bind({});

Version1.args = {
  variant: 'v1',
  imgSrc:
    'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  title:
    'It is not about putting forms and colors together, but about finding the ',
  description:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences',
  tags: ['copywriting', 'coding'],
};

Version2.args = {
  ...Version1.args,
  variant: 'v2',
};

Version3.args = {
  variant: 'v3',
  imgSrc:
    'https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  title:
    'It is not about putting forms and colors together, but about finding the ',
  description:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences',
};
