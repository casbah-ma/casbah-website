import PortfolioHeader from '.';

export default {
  title: 'Components/PortfolioHeader',
  component: PortfolioHeader,
};

const Template = (args) => <PortfolioHeader {...args}>hey</PortfolioHeader>;

export const Default = Template.bind({});
Default.args = {
  title: 'our work',
  description:
    'Constructing the brand’s narrative and putting together the right multi-format content, to be distributed in the appropriate channels, should be among any organization’s top priorities to get the word out.',
  specialLine: 'to be distributed in the appropriate channels, should',
};
