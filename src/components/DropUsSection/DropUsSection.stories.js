import DropUsSection from ".";

export default {
  title: "sections/DropUsSection",
  component: DropUsSection,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

const Template = (args) => <DropUsSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  infos: {
    email: "Fake@CTD.MA",
    phone: "+212 254 485 478",
    address: "Rue Ahfir Res Nouha Etage 7 N°49 Tanger 90000 Morocco",
  },
  cords: {
    lat: 35.775815942301875,
    lng: -5.796029401535288,
  },
  // description
  description:
    "It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.",
};
