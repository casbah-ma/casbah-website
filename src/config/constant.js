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

// Casbah Localisation on the map
export const cords = {
  lat: 35.775815942301875,
  lng: -5.796029401535288,
};

// Casbah informations
export const infos = {
  email: 'Fake@CTD.MA',
  phone: '+212 254 485 478',
  address: 'Rue Ahfir Res Nouha Etage 7 N°49 Tanger 90000 Morocco',
};

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
    name: 'lab',
    url: '/lab',
  },
  {
    name: 'blogs',
    url: '/blogs',
  },
  {
    name: 'contact',
    url: '/contact',
  },
];

export const media = [
  {
    url: 'https://www.facebook.com/',
    icon: Facebook,
    name: 'facebook',
  },
  {
    url: 'https://www.instagram.com/',
    icon: Instagram,
    name: 'instagram',
  },
  {
    url: 'https://www.linkedin.com/',
    icon: LinkedIn,
    name: 'LinkedIn',
  },
];


export const socialMedia = [
  {
    name: 'facebook',
    icon: FacebookSVG,
    url: 'https://www.facebook.com/',
  },
  {
    name: 'linkedin',
    icon: LinkedInSVG,
    url: 'https://www.linkedin.com/',
  },
  {
    name: 'instagram',
    icon: InstagramSVG,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'github',
    icon: GithubSVG,
    url: ''
  },
  {
    name: 'twitter',
    icon: TwitterSVG,
    url: ''
  },
  {
    name: 'dribbble',
    icon: DribbbleSVG,
    url: ''
  },
  {
    name: 'behance',
    icon: BehanceSVG,
    url: ''
  },
]
