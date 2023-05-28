import {
  AboutContent,
  AboutWrapper,
  ExtraContent,
  imagesSize,
} from './AboutSection.styles';
import Header from '../Header';
import MyImage from '../MyImage';
import AboutParagraph from '../AboutParagraph';

const AboutSection = ({ header, image, ourVesion, ourMission, extraText1, extraText2 }) => {
  return (
    <AboutWrapper>
      <Header {...header} />
      <AboutContent>
        <MyImage src={image} sizes={imagesSize} alt="about" />
        <AboutParagraph {...ourVesion} />
        <AboutParagraph {...ourMission} />
        <ExtraContent>
          <AboutParagraph {...extraText1} size='sm' />
          <AboutParagraph {...extraText2} size='sm' />
        </ExtraContent>
      </AboutContent>
    </AboutWrapper>
  );
};

export default AboutSection;
