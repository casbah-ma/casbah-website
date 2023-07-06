import ShareSection from '.';
import * as SahreButtonStories from '../ShareButton/ShareButton.stories';

export default {
  title: 'Sections/ShareSection',
  component: ShareSection,
};

export const Default = (args) => <ShareSection {...args} />;

Default.args = {
  data: [
    SahreButtonStories.Default.args,
    SahreButtonStories.Default.args,
    SahreButtonStories.Default.args,
    SahreButtonStories.Default.args,
    SahreButtonStories.Default.args,
  ],
};
