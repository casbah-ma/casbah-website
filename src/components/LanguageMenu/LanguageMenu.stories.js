import LanguageMenu from '.';

export default {
  title: 'Components/LanguageMenu',
  component: LanguageMenu,
};

const Template = (args) => <LanguageMenu {...args} q />;

export const Default = Template.bind({});
Default.args = {};
