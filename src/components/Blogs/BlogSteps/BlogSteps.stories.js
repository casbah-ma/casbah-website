import BlogSteps from '.';
import * as UserInfoStories from '../../UserInfo/UserInfo.stories';

export default {
  title: 'Blogs/BlogSteps',
  component: BlogSteps,
};

const Template = (args) => <BlogSteps {...args} />;

export const Default = Template.bind({});

Default.args = {
  steps:
    'It is not about putting forms and colors together, but about finding the\
    right balance between logic and aesthetics, in order to offer optimal\
    experiences for the targeted audiences, while conveying the right\
    messages and staying true to the brand’s identity.#It is not about\
    putting forms and colors together, but about finding the right balance\
    between logic and aesthetics, in order to offer optimal experiences for\
    the targeted audiences, while conveying the right messages and staying\
    true to the brand’s identity.#It is not about putting forms and colors\
    together, but about finding the right balance between logic and\
    aesthetics, in order to offer optimal experiences for the targeted\
    audiences, while conveying the right messages and staying true to the\
    brand’s identity.It is not about putting forms and colors together, but\
    about finding the right balance between logic and aesthetics, in order\
    to offer optimal experiences for the targeted audiences, while conveying\
    the right messages and staying true to the brand’s identity.',
  title:
    'It is not about putting forms and colors together, but about finding ',
  paragraph:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
  userInfo: UserInfoStories.Default.args,
};
