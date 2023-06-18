import Breadcrumb from '.';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export const Default = (args) => <Breadcrumb {...args} />;

Default.args = {
  parent: 'Home',
  slug: 'project name',
};
