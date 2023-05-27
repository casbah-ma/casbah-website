import ContactUs from '.';

export default {
  title: 'Forms/ContactUs',
  component: ContactUs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ContactUs {...args} />;

export const Default = Template.bind({});
