import MapCard from ".";

export default {
    title: "Components/MapCard",
    component: MapCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded'
    }
};

const Template = (args) => <MapCard {...args} />

export const Default = Template.bind({});
