import MyImage from "../MyImage";
import Paragraph from "../Paragraph";
import Tag from "../Tag";
import {
  CardInfo,
  CardTags,
  CardTitle,
  CardWrapper,
  imagesSizes,
} from "./BlogsCard.styles";

const BlogsCard = ({ variant, title, description, imgSrc, tags, ...rest }) => {
  return (
    <CardWrapper variant={variant} {...rest}>
      {tags && (
        <CardTags>
          {tags.map((tag, index) => (
            console.log(tag),
            <Tag key={tag + index} title={tag} />
          ))}
        </CardTags>
      )}
      <MyImage sizes={imagesSizes[variant]} src={imgSrc} alt={title} />
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <Paragraph size="md">{description}</Paragraph>
      </CardInfo>
    </CardWrapper>
  );
};

export default BlogsCard;
