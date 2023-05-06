import PicTop from ".";
import { directions } from "./PicTop.styles";

export default {
  title: "Articles/PicTop",
  component: PicTop,
  argTypes: {
    size: {
      options: Object.keys(directions),
      control: { type: "radio" },
    },
  },
};

const texts = [
  "Creating the endogenous and exogenous conditions for a successful digital transformation.",
  "A top-down approach often ticks all the boxes but doesn’t always have the right adhesion or comprehension of the operational challenges encountered.",
  "(Un)surprisingly, the right ideas for how the transformation comes from within. The digital layer is added as an enabler to go from ideas to blueprints.",
];

const Template = (args) => <PicTop {...args} />;

export const Row = Template.bind({});
Row.args = {
  img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
  title: "Digital transformation",
  texts,
  direction: "row",
};

export const Column = Template.bind({});
Column.args = {
  ...Row.args,
  direction: "column",
};
