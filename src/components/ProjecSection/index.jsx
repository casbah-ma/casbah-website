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

function ProjecSection({ image, title, tags, ...rest }) {
  const wrapperVariant = {
    visible: {
      transition: {
        delay: 0.2,
        staggerChildren: 1,
      },
    },
  };

  const imageVariant = {
    hidden: {
      scale: 0.5,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeIn',
      },
    },
  };

  const contentVariant = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tagsVariant = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tagVariant = {
    hidden: {
      y: '100%',
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  const titleVariant = {
    hidden: {
      y: '100%',
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };

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
