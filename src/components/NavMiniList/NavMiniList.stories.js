import NavMiniList from '.';

export default {
  title: 'Components/NavMiniList',
  component: NavMiniList,
};

const Template = (args) => <NavMiniList {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Expertise',
  options: [
    {
      label: 'Articulate',
      value: '1',
      url: '/',
    },
    {
      label: 'Design',
      value: '2',
      url: '/',
    },
    {
      label: 'Build',
      value: '3',
      url: '/',
    },
    {
      label: 'Formulate',
      value: '4',
      url: '/',
    },
  ],
};
