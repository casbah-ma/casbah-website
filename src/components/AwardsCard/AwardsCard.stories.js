import AwardsCard from '.';

export default {
  title: 'Components/AwardsCard',
  component: AwardsCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <AwardsCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Awards',
  date: '2022',
  imgSrc:
    'https://images.unsplash.com/photo-1580674287546-e5e105fb2541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
};
