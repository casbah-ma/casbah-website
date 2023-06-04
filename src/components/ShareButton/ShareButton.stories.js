import ShareButton from '.';
import Twitter from '@/icons/Twitter';

export default {
  title: 'Common/ShareButton',
  component: ShareButton,
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <ShareButton {...args} />;

Default.args = {
  children: 'twitter',
  Icon: Twitter,
  message:
    'salam http://localhost:6006/?path=/story/common-sharebutton--default',
  link: 'https://twitter.com/intent/tweet?text=',
};
