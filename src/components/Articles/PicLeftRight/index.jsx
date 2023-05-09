import {
  StyledArticle,
  StyledPicLeft,
  StyledText,
  imageVariants,
} from "./PicLeftRight.styles";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import MyImage from "../../MyImage";
import PropTypes from "prop-types";

const PicLeftRight = ({ title, article, imgSrc, variant = "v1" }) => {
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

PicLeftRight.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  article: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(Object.keys(imageVariants)),
};

export default PicLeftRight;
