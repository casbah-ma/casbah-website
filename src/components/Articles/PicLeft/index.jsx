import { StyledImg, StyledPicLeft, StyledText } from "./PicLeft.styles";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";

const PicLeft = ({ title, article, imgSrc, variant }) => {
  return (
    <StyledPicLeft variant={variant}>
      <StyledImg
        src={imgSrc}
        alt={title}
      />
      <StyledText>
        <Title renderAs="h2">{title}</Title>
        <Paragraph size="md">{article}</Paragraph>
      </StyledText>
    </StyledPicLeft>
  );
};

export default PicLeft;
