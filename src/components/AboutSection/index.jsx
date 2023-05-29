import {
  AboutContent,
  AboutWrapper,
  ExtraContent,
  imagesSize,
} from './AboutSection.styles';
import Header from '../Header';
import MyImage from '../MyImage';
import AboutParagraph from '../AboutParagraph';

const AboutSection = ({
  header,
  image,
  ourVision,
  ourMission,
  extraText1,
  extraText2,
}) => {
  return (
    <AboutWrapper>
      <Header {...header} />
      <AboutContent>
        {image && <MyImage src={image} sizes={imagesSize} alt="about" />}
        <AboutParagraph {...ourVision} />
        <AboutParagraph {...ourMission} />
        <ExtraContent>
          {extraText1.title && <AboutParagraph {...extraText1} size="sm" />}
          {extraText2.title && <AboutParagraph {...extraText2} size="sm" />}
        </ExtraContent>
      </AboutContent>
    </AboutWrapper>
  );
};

export default AboutSection;
