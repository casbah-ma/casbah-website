import MapCard from ".";

export default {
  title: "Components/MapCard",
  component: MapCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

const Template = (args) => <MapCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  latitude: 35.775815942301875,
  longitude: -5.796029401535288,
  zoom: 14,
};
