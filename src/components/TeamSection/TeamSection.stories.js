import TeamSection from ".";
import * as ProfileCardSTories from "../ProfileCard/ProfileCard.stories";
export default {
  title: "Sections/TeamSection",
  component: TeamSection,
};

const Template = (args) => <TeamSection {...args} />;
const cards = [
  ProfileCardSTories.Default.args,
  ProfileCardSTories.Default.args,
  ProfileCardSTories.Default.args,
  ProfileCardSTories.Default.args,
  ProfileCardSTories.Default.args,
  ProfileCardSTories.Default.args,
  ProfileCardSTories.Default.args,
  ProfileCardSTories.Default.args,
];

export const Default = Template.bind({});
Default.args = {
  title: "Team",
  description:
    "It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.",
  cards,
};
