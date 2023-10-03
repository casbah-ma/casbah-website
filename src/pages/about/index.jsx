import AboutSection from '../../components/AboutSection';
import AwardsSection from '../../components/AwardsSection';
import ClientsSwiper from '../../components/ClientsSwiper';
import TeamSection from '../../components/TeamSection';
import { allAbouts } from 'contentlayer/generated';
import Barcelo from 'public/clients/Barcelo.png';
import BMK from 'public/clients/BMK.png';
import Chamal from 'public/clients/Chamal.png';
import CR_Fes from 'public/clients/CR_Fes.png';
import Draa from 'public/clients/Draa.png';
import Farah from 'public/clients/Farah.png';
import Mandarian from 'public/clients/Mandarian.png';
import Widiane from 'public/clients/Widiane.png';
import Hayatt from 'public/clients/Hayatt.png';
import { allHomes } from 'contentlayer/generated';

const images = [
  {
    src: BMK,
    name: 'bmk',
  },
  {
    src: Barcelo,
    name: 'Barcelo',
  },
  {
    src: Chamal,
    name: 'chamal',
  },
  {
    src: CR_Fes,
    name: 'cr_fes',
  },
  {
    src: Draa,
    name: 'Draa',
  },
  {
    src: Farah,
    name: 'Farah',
  },
  {
    src: Hayatt,
    name: 'Hayatt',
  },
  {
    src: Mandarian,
    name: 'Mandarian',
  },
  {
    src: Widiane,
    name: 'Widiane',
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
    <div className="w-full flex flex-col justify-center items-center gap-36 mt-[5.438rem] md:mt-[11.5rem]">
      <AboutSection {...data.aboutSection} />
      {/* <AwardsSection {...data.awardsSection} /> */}
      <TeamSection {...data.teamSection} />
      <ClientsSwiper {...data.clientSection} />
    </div>
  );
};

export default About;
