import UserInfo from '.';

export default {
  title: 'Components/UserInfo',
  component: UserInfo,
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <UserInfo {...args} />;

Default.args = {
  name: 'Soufiane Manahi',
  post: 'UX Ui designer',
  image:
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3431&q=80',
};
