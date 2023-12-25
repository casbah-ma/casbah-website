import Facebook from '@/icons/Facebook';
import Instagram from '@/icons/Instagram';
import LinkedIn from '@/icons/LinkedIn';
import FacebookSVG from 'public/icons/facebook.svg';
import InstagramSVG from 'public/icons/instagram.svg';
import LinkedInSVG from 'public/icons/linkedin.svg';
import GithubSVG from 'public/icons/github.svg';
import TwitterSVG from 'public/icons/twitter.svg';
import DribbbleSVG from 'public/icons/dribbble.svg';
import BehanceSVG from 'public/icons/behance.svg';

// base URL o Casbah
export const baseURL = 'https://casbah-website.vercel.app';

// Casbah Localisation on the map
export const cords = {
  lat: 35.775815942301875,
  lng: -5.796029401535288,
};

// Casbah informations
export const infos = {
  email: 'contact@ctd.ma',
  phone: '+212 254 485 478',
  address: 'Rue Ahfir Res Nouha Etage 7 N°49 Tanger 90000 Morocco',
};

export const Addresses = [
  {
    name: 'Tanger',
    address: 'Rue Ahfir Res Nouha Etage 7 N°49 Tanger 90000 Morocco',
  },
  // {
  //   name: 'Casablanca',
  //   address: 'Rue Ahfir Res Nouha Etage 7 N°49 Tanger 90000 Morocco',
  // },
];

export const logo =
  'https://res.cloudinary.com/casbah/image/upload/v1683662155/Group_93_ssmvyu.svg';

export const links = [
  {
    name: 'home',
    url: '/',
  },
  {
    name: 'agency',
    url: '/about',
  },
  {
    name: 'expertise',
    options: [
      {
        label: 'articulate',
        value: '1',
        url: '/articulate',
      },
      {
        label: 'design',
        value: '2',
        url: '/design',
      },
      {
        label: 'build',
        value: '3',
        url: '/build',
      },
      {
        label: 'formulate',
        value: '4',
        url: '/formulate',
      },
    ],
  },
  {
    name: 'portfolio',
    url: '/portfolio',
  },
  {
    name: 'open Source',
    url: '/lab',
  },
  // {
  //   name: 'blogs',
  //   url: '/blogs',
  // },
  {
    name: 'contact',
    url: '/contact',
  },
];

export const media = [
  {
    url: 'https://www.facebook.com/casbahm',
    icon: Facebook,
    name: 'facebook',
  },
  {
    url: 'https://www.instagram.com/',
    icon: Instagram,
    name: 'instagram',
  },
  {
    url: 'https://www.linkedin.com/company/casbah-tourism-development/',
    icon: LinkedIn,
    name: 'LinkedIn',
  },
];

export const socialMedia = [
  {
    name: 'facebook',
    icon: FacebookSVG,
    url: 'https://www.facebook.com/casbahm',
  },
  {
    name: 'linkedin',
    icon: LinkedInSVG,
    url: 'https://www.linkedin.com/company/casbah-tourism-development/',
  },
  {
    name: 'instagram',
    icon: InstagramSVG,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'github',
    icon: GithubSVG,
    url: 'https://github.com/casbah-ma',
  },
  {
    name: 'twitter',
    icon: TwitterSVG,
    url: 'https://twitter.com/casbah_ma',
  },
  {
    name: 'dribbble',
    icon: DribbbleSVG,
    url: 'https://dribbble.com/casbah_ma',
  },
  {
    name: 'behance',
    icon: BehanceSVG,
    url: 'https://www.behance.net/casbahma',
  },
];
