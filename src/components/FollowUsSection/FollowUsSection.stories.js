import FollowUs from ".";

export default {
    title: "Sections/FollowUs",
    component: FollowUs,
};

export const Default = (args) => <FollowUs {...args} />;

Default.args = {
    title: "Follow Us",
    description: "It is not about putting forms and colors together, but about finding the right balance between ",
}