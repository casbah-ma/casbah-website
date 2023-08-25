import PropTypes from 'prop-types';
import MyImage from '../MyImage';
import Paragraph from '../Paragraph';
import Tag from '../Tag';
import {
  CardInfo,
  CardTags,
  CardTitle,
  CardWrapper,
  imagesSizes,
} from './BlogsCard.styles';
import { useContext } from 'react';
import { CursorContext } from '../../store/CursorContext';

const BlogsCard = ({
  variant,
  title,
  description,
  imgSrc,
  tags,
  isFirst,
  ...rest
}) => {
  const { toggleExpand } = useContext(CursorContext);

  return (
    <CardWrapper
      variant={variant}
      onMouseEnter={toggleExpand}
      onMouseLeave={toggleExpand}
      {...rest}
    >
      {tags && (
        <CardTags>
          {tags.map((tag, index) => (
            <Tag key={tag + index} title={tag} />
          ))}
        </CardTags>
      )}
      <MyImage sizes={imagesSizes[variant]} src={imgSrc} alt={title} />
      <CardInfo>
        <CardTitle $isFirst={isFirst}>{title}</CardTitle>
        <Paragraph size="md">{description}</Paragraph>
      </CardInfo>
    </CardWrapper>
  );
};

BlogsCard.propTypes = {
  variant: PropTypes.oneOf(['v1', 'v2']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default BlogsCard;
