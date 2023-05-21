import Example from '.';

export default {
  title: 'Example',
  component: Example,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

const Template = (args) => <Example {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Hello Casbah Team',
};
