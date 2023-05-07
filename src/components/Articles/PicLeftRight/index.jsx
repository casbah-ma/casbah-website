import {
  StyledArticle,
  StyledImg,
  StyledPicLeft,
  StyledText,
  imageVariants,
} from "./PicLeftRight.styles";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import MyImage from "../../MyImage";

const PicLeftRight = ({ title, article, imgSrc, variant }) => {
  return (
    <StyledPicLeft variant={variant}>
      <MyImage sizes={imageVariants[variant]} src={imgSrc} alt={title} />
      <StyledText>
        <Title renderAs="h2">{title}</Title>
        <StyledArticle>
          {article?.length > 0 &&
            article.map((text, i) => (
              <Paragraph key={i} size="md">
                {text}
              </Paragraph>
            ))}
        </StyledArticle>
      </StyledText>
    </StyledPicLeft>
  );
};

export default PicLeftRight;
