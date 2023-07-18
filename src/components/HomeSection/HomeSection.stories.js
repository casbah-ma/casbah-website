import HomeSection from '.';
import lottie from '../../lotties/straightLine.json';

export default {
  title: 'Sections/HomeSection',
  component: HomeSection,
};

const texts = [
  'Our first step is to establish clear, measurable objectives for your project. We work closely with you to understand your vision and identify any areas for improvement. With a precise set of goals in place, we ensure that your project is set up for success from the very beginning. Our team collaborates with you to ensure that everyone is aligned and focused on achieving your desired outcomes.',
];

const Template = (args) => <HomeSection {...args} />;

export const Left = Template.bind({});
Left.args = {
  title: 'The brief is often clear : Starting from "A" to go to "B"',
  texts,
  lottie,
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  ...Left.args,
  subtitle: 'Or you know where you have to get. ',
};
