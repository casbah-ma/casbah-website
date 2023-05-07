import PicLeftRight from ".";
import { versions } from "./PicLeftRight.styles";

export default {
  title: "Articles/PicLeftRight",
  component: PicLeftRight,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: Object.keys(versions),
      control: { type: "radio" },
    },
  },
};

const v1Texts = [
  "Creating the endogenous and exogenous conditions for a successful digital transformation.",
  "A top-down approach often ticks all the boxes but doesn’t always have the right adhesion or comprehension of the operational challenges encountered.",
  "(Un)surprisingly, the right ideas for how the transformation comes from within. The digital layer is added as an enabler to go from ideas to blueprints.",
];

const v2Texts = [
  "In order to thrive, brands have to be about more than what they sell.",
  "Users and customers want to recognize themselves in the brand’s promise and the values it carries. Defining or updating your definition of who you are, why you exist, and how you interact with the world ",
  "will help you be more in control of how you’re positioned and perceived by your audience.",
];

const v3Texts = [
  "Often, by inaction. Between the tech stack, the hosting and computation, the security risks, the conformity with data protection regulations, and the maintenance imperative, organizations have to keep an analytical eye on their costs, risks, and threats.",
  "You can always go the “free” route by having a limited stack. Then again, think of the person-hours lost, the missed opportunities, and other shortfalls.",
];

const v4Texts = [
  "Writing clear and effective material is an important part of creating campaigns or putting together messaging adapted to channels.",
  "The focus is to get users to take specific actions depending on the goals set for marketing initiatives taken by the brand",
];

const Template = (args) => <PicLeftRight {...args} />;
export const Version1 = Template.bind({});
export const Version2 = Template.bind({});
export const Version3 = Template.bind({});
export const Version4 = Template.bind({});

Version1.args = {
  variant: "v1",
  imgSrc:
    "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  title: "Competitive analysis and benchmark",
  article: v1Texts,
};

Version2.args = {
  variant: "v2",
  imgSrc:
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  title: "Branding & Identity",
  article: v2Texts,
};

Version3.args = {
  variant: "v3",
  imgSrc:
    "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  title: "Branding & Identity",
  article: v3Texts,
};

Version4.args = {
  variant: "v4",
  imgSrc:
    "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  title: "copywriting",
  article: v4Texts,
};
