import AboutSection from '../../components/AboutSection';
import AwardsSection from '../../components/AwardsSection';
import ClientsSwiper from '../../components/ClientsSwiper';
import TeamSection from '../../components/TeamSection';
import { allAbouts } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allAbouts.find((page) => page.lang === locale);
  return {
    props: {
      data,
    },
  };
};

const About = ({ data }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-36 p-[2rem] md:p-16 lg:pt-[11.688rem] lg:pb-[14.75rem]">
      <AboutSection {...data.aboutSection} />
      <AwardsSection {...data.awardsSection} />
      <TeamSection {...data.teamSection} />
      <ClientsSwiper {...data.clientSection} />
    </div>
  );
};

export default About;
