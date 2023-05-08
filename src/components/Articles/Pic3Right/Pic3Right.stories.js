import Pic3Right from ".";

export default {
  title: "Articles/Pic3Right",
  component: Pic3Right,
};

const texts = [
  "Improving trust in your organization by providing seamless and coherent digital experiences is an important tool for building better brand equity over time.",

  "Putting in place organization-wide rules and guidelines for use cases, as well as design elements like typography, colors, and UI components, also boost efficiency, as end results can be reached faster with less time and resources",
];

const Template = (args) => <Pic3Right {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Design Systems",
  bigImg:
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
  mediumImg:
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
  smallImg:
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
  texts,
};
