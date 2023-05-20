import XButton from ".";

export default {
  title: "Components/XButton",
  component: XButton,
};

const Template = (args) => <XButton {...args}>Facebook</XButton>;

export const Primary = Template.bind({});
Primary.args = {};
