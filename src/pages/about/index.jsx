import AboutSection from '../../components/AboutSection';
// import AwardsSection from '../../components/AwardsSection';
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
import majliss from 'public/clients/majliss.png';
import FNRT from 'public/clients/FNRT.png';
import FNIH from 'public/clients/FNIH.png';
import Dixil from 'public/clients/Dixil.png';
import CNT from 'public/clients/CNT.png';
import VisitCasa from 'public/clients/visit-casa.png';

import { allHomes } from 'contentlayer/generated';
import AboutHero from '../../components/AboutHero';

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
  {
    src: VisitCasa,
    name: 'visit-casa',
  },
  {
    src: majliss,
    name: 'majliss',
  },
  {
    src: FNRT,
    name: 'FNRT',
  },
  {
    src: FNIH,
    name: 'FNIH',
  },
  {
    src: Dixil,
    name: 'Dixil',
  },
  {
    src: CNT,
    name: 'CNT',
  },
];

export const getStaticProps = ({ locale }) => {
  const data = allAbouts.find((page) => page.lang === locale);

  return {
    props: {
      data: {
        ...data,
        clientSection: { ...data.clientSection, images },
        heroProps: data.heroProps,
      },
    },
  };
};

export const meta = {
  title: 'Casbah - Shaping Future with Innovation and Authenticity',
  description:
    "Explore Casbah's philosophy of blending strength from roots with forward-thinking innovation. Discover our dedication to creating sustainable, smart territories driven by technology and human empathy.",
};

const About = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-36 mt-[5.438rem] md:mt-[6rem]">
      <AboutHero {...data.heroProps} />
      <AboutSection {...data.aboutSection} />
      {/* <AwardsSection {...data.awardsSection} /> */}
      <TeamSection {...data.teamSection} />
      <ClientsSwiper {...data.clientSection} />
    </div>
  );
};

export default About;
