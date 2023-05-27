import Pic2Left from '.';

export default {
  title: 'Articles/Pic2Left',
  component: Pic2Left,
};

const texts = [
  'Creating the endogenous and exogenous conditions for a successful digital transformation.',
  'A top-down approach often ticks all the boxes but doesn’t always have the right adhesion or comprehension of the operational challenges encountered.',
];

const Template = (args) => <Pic2Left {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'internet of things',
  bigImg:
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80',
  mediumImg:
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80',
  smallImg:
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80',
  texts,
};
