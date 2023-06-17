import PropTypes from 'prop-types';
import {
  Backdrop,
  Content,
  ImageWrapper,
  Tag,
  Tags,
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
  imageVariant2,
} from './variants';
import AnimatedDisplay from '../AnimatedDisplay';
import { motion } from 'framer-motion';

function ProjecSection({ image, title, tags, isFirst, ...rest }) {
  return (
    <Wrapper
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      {...rest}
    >
      <ImageWrapper
        key={image}
        variants={isFirst ? imageVariant : imageVariant2}
      >
        <MyImage sizes={imageStyle} src={image} alt="" />
        <Backdrop />
      </ImageWrapper>

      <Content key={title + tags.join('')} variants={contentVariant}>
        <Tags variants={tagsVariant}>
          {tags.map((tag) => (
            <Tag variants={tagVariant} key={tag}>
              {tag}
            </Tag>
          ))}
        </Tags>
        <motion.div variants={titleVariant}>
          <AnimatedDisplay color="white" renderAs="h1" size="lg" text={title} />
        </motion.div>
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
