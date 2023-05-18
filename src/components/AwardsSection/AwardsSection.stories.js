import AwardsSection from ".";
import * as AwardCardStories from "../AwardsCard/AwardsCard.stories";

export default {
  title: "Sections/AwardsSection",
  component: AwardsSection,
};

const Template = (args) => <AwardsSection {...args} />;
const cards = [
  AwardCardStories.Default.args,
  AwardCardStories.Default.args,
  AwardCardStories.Default.args,
  AwardCardStories.Default.args,
  AwardCardStories.Default.args,
];

export const Default = Template.bind({});
Default.args = {
  title: "awards",
  description:
    "It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying ",
  cards,
};
