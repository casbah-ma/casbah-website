import HeaderV2 from '.';

export default {
  title: 'Common/HeaderV2',
  component: HeaderV2,
};

const Template = (args) => <HeaderV2 {...args} />;

export const V1 = Template.bind({});
V1.args = {
  title:
    'Creating the products, interfaces, tools, and architectures that will help the organization fulfill its mission and reach its audiences,',
  description:
    'with a specific set of functionalities that will enable the users, but also the organization itself, to find the right match to their needs, whether they are informative, promotional or practical.',
  specialLine: 'help the organization fulfill its mission',
};

export const V2 = Template.bind({});
V2.args = {
  ...V1.args,
  variant: 'v2',
};
