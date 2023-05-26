import ProfileCard from '.';

export default {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Soufiane Manahi',
  post: 'UX Ui designer',
  imgSrc:
    'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
};
