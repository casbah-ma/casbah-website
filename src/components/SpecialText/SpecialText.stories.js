import SpecialText from ".";
import { sizes } from "./SpecialText.styles";

export default {
  title: "components/SpecialText",
  component: SpecialText,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    size: {
      options: Object.keys(sizes),
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <SpecialText {...args} />;

export const Base = Template.bind({});
export const Bold = Template.bind({});

Base.args = {
  text: "It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.",
  specialLine:
    "experiences for the targeted audiences, while conveying the right messages and staying true",
  size: "md",
};

Bold.args = {
  text: "Constructing the brand’s narrative and putting together the right multi-format content, to be distributed in the appropriate channels, should be among any organization’s top priorities to get the word out.",
  specialLine: "to be distributed in the appropriate channels, should",
  size: "lg",
  uppercase: true,
};
