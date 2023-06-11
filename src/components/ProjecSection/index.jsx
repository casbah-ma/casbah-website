import PropTypes from 'prop-types';
import {
  Backdrop,
  Content,
  ImageWrapper,
  Tag,
  Tags,
  Title,
  Wrapper,
  imageStyle,
} from './ProjecSection.styles';
import MyImage from '@/components/MyImage';

import {
  wrapperVariant,
  imageVariant,
  contentVariant,
  tagsVariant,
  tagVariant,
  titleVariant,
} from './variants';

function ProjecSection({ image, title, tags, ...rest }) {
  return (
    <Wrapper
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      <ImageWrapper variants={imageVariant}>
        <MyImage sizes={imageStyle} src={image} alt="" />
        <Backdrop />
      </ImageWrapper>

      <Content variants={contentVariant}>
        <Tags variants={tagsVariant}>
          {tags.map((tag) => (
            <Tag variants={tagVariant} key={tag}>
              {tag}
            </Tag>
          ))}
        </Tags>
        <Title variants={titleVariant}>{title}</Title>
      </Content>
    </Wrapper>
  );
}

ProjecSection.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjecSection;
