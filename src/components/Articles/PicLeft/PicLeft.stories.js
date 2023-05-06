import PicLeft from ".";

export default {
  title: "Components/Articles/PicLeft",
  component: PicLeft,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};

const Template = (args) => <PicLeft {...args} />;
export const Version1 = Template.bind({});
export const Version2 = Template.bind({});

Version1.args = {
  variant: "v1",
  imgSrc:
    "https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2681&q=80",
  title: "Competitive analysis and benchmark",
  article:
    "Creating the endogenous and exogenous conditions for a successful digital transformation. A top-down approach often ticks all the boxes but doesn’t always have the right adhesion or comprehension of the operational challenges encountered. (Un)surprisingly, the right ideas for how the transformation comes from within. The digital layer is added as an enabler to go from ideas to blueprints.",
};

Version2.args = {
  variant: "v2",
  imgSrc:
    "https://images.unsplash.com/photo-1484075225670-bf2c43190205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80",
  title: "Branding & Identity",
  article:
    "In order to thrive, brands have to be about more than what they sell. Users and customers want to recognize themselves in the brand’s promise and the values it carries. Defining or updating your definition of who you are, why you exist, and how you interact with the world will help you be more in control of how you’re positioned and perceived by your audience.",
};
