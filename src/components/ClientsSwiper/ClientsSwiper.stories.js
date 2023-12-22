import ClientsSwiper from '.';
import Widiane from 'public/clients/Widiane.png';

export default {
  title: 'Sections/ClientsSwiper',
  component: ClientsSwiper,
};

const Template = (args) => <ClientsSwiper {...args} />;
const images = [
  {
    src: Widiane,
    name: 'bolles gank',
  },
  {
    src: Widiane,
    name: 'bolles gank',
  },
  {
    src: Widiane,
    name: 'bolles gank',
  },
  {
    src: Widiane,
    name: 'bolles gank',
  },
  {
    src: Widiane,
    name: 'bolles gank',
  },
  {
    src: Widiane,
    name: 'bolles gank',
  },
];

export const Default = Template.bind({});
Default.args = {
  title: 'clients',
  description:
    'It is not about putting forms and colors together, but about finding the right balance between logic and aesthetics, in order to offer optimal experiences for the targeted audiences, while conveying the right messages and staying true to the brand’s identity.',
  images,
};
