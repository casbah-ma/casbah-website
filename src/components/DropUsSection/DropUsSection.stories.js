import DropUsSection from '.';

export default {
  title: 'sections/DropUsSection',
  component: DropUsSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <DropUsSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  description:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
  specialLine:
    'experiences for the targeted audiences, while conveying the right messages and staying true',
};
