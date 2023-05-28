import AboutSection from '.';

export default {
  title: 'Components/AboutSection',
  component: AboutSection,
};

export const Default = (args) => <AboutSection {...args} />;

Default.args = {
  header: {
    title: 'About',
    description:
      'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
  },
  image:
    'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80',
  ourVesion: {
    title: 'Our Vision',
    text: [
      ' It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
      'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the',
      'targeted audiences, while conveying the right messages and staying true to the brand’s identity.It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences',
      'for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
    ],
  },
  ourMission: {
    title: 'Our Mission',
    text: [
      ' It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
      'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the',
      'targeted audiences, while conveying the right messages and staying true to the brand’s identity.It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences',
      'for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
    ],
  },
  extraText1: {
    title: 'It is not about putting forms and colors',
    text: [
      'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying ',
    ],
  },
  extraText2: {
    title: 'It is not about putting forms and colors',
    text: [
      'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying ',
    ],
  },

};
