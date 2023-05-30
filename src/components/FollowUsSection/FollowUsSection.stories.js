import FollowUs from '.';

export default {
  title: 'Sections/FollowUs',
  component: FollowUs,
  parameters: {
    // layout: "centered",
  },
};

export const Default = (args) => <FollowUs {...args} />;

Default.args = {
  description:
    'It is not about putting forms and colors together, but about finding the right balance between.',
};
