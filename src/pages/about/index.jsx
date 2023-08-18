import AboutSection from '../../components/AboutSection';
import AwardsSection from '../../components/AwardsSection';
import ClientsSwiper from '../../components/ClientsSwiper';
import TeamSection from '../../components/TeamSection';
import { allAbouts } from 'contentlayer/generated';
import ClientImage from 'public/Logo_Visit_Beni_Mellal_black.png';
import Barcelo from 'public/barcelo.png';
import Sheraton from 'public/sher.png';
import { allHomes } from 'contentlayer/generated';
import AboutHero from '../../components/AboutHero';

const images = [
  {
    src: ClientImage,
    name: 'about',
  },
  {
    src: Barcelo,
    name: 'about',
  },
  {
    src: Sheraton,
    name: 'about',
  },
  {
    src: ClientImage,
    name: 'about',
  },
  {
    src: Barcelo,
    name: 'about',
  },
  {
    src: Sheraton,
    name: 'about',
  },
  {
    src: ClientImage,
    name: 'about',
  },
  {
    src: Barcelo,
    name: 'about',
  },
  {
    src: Sheraton,
    name: 'about',
  },
];

export const getStaticProps = ({ locale }) => {
  const data = allAbouts.find((page) => page.lang === locale);
  const dataHome = allHomes.find((page) => page.lang === locale);

  return {
    props: {
      data: {
        ...data,
        clientSection: { ...data.clientSection, images },
        heroProps: dataHome.heroProps,
      },
    },
  };
};

const About = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-36 lg:pt-[10rem]">
      <AboutHero  className="" {...data.heroProps} />
      <AboutSection {...data.aboutSection} />
      <AwardsSection {...data.awardsSection} />
      <TeamSection {...data.teamSection} />
      <ClientsSwiper {...data.clientSection} />
    </div>
  );
};

export default About;
