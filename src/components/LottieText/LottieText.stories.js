import LottieText from '.';
import lottie from '@/lotties/aticulate.json';
export default {
  title: 'Components/LottieText',
  component: LottieText,
};

const Template = (args) => <LottieText {...args} />;

export const Default = Template.bind({});
Default.args = {
  lottie,
};
