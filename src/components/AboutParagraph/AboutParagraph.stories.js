import AboutParagraph from '.';
import { sizes } from './AboutParagraph.styles';

export default {
  title: 'Components/AboutParagraph',
  component: AboutParagraph,
  argTypes: {
    size: {
      control: {
        options: ['sm', 'lg'],
        control: { type: 'radio' },
      },
    },
  },
};

const Template = (args) => <AboutParagraph {...args} />;

export const Default = Template.bind({});
export const Small = Template.bind({});

Default.args = {
  title: 'Our Vision',
  text: [
    ' It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the',
    'targeted audiences, while conveying the right messages and staying true to the brand’s identity.It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences',
    'for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
  ],
};

Small.args = {
  title: 'It is not about putting forms and colors',
  text: [
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying ',
  ],
  size: 'sm',
};
