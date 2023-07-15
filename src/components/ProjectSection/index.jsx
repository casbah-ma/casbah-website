import PropTypes from 'prop-types';
import {
  Backdrop,
  Container,
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
  imageVariant3,
} from './variants';
import AnimatedDisplay from '../AnimatedDisplay';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { useLocomotive } from '../../hooks/useLocomotive';
import useScrollDirection from '../../hooks/useScrollDirection';

function ProjecSection({
  imgSrc,
  title,
  tags,
  isFirst,
  slug,
  scrollDirection,
  ...rest
}) {
  const router = useRouter();
  const { ref, getIsVisible, isFixed } = useLocomotive(1, 100);

  const handleClick = () => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <Wrapper onClick={handleClick} ref={ref} {...rest}>
      <AnimatePresence mode="sync">
        {getIsVisible() && (
          <Container
            isFixed={isFixed}
            variants={wrapperVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ImageWrapper
              key={imgSrc}
              variants={
                isFirst
                  ? scrollDirection === 'up'
                    ? imageVariant3
                    : imageVariant
                  : imageVariant2
              }
            >
              <MyImage sizes={imageStyle} src={imgSrc} alt="" />
              <Backdrop />
            </ImageWrapper>

            <Content key={title + tags?.join('')} variants={contentVariant}>
              <Tags variants={tagsVariant}>
                {tags?.map((tag) => (
                  <Tag variants={tagVariant} key={tag}>
                    {tag}
                  </Tag>
                ))}
              </Tags>
              <motion.div variants={titleVariant}>
                <AnimatedDisplay
                  color="white"
                  renderAs="h1"
                  size="lg"
                  text={title}
                />
              </motion.div>
            </Content>
          </Container>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

ProjecSection.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjecSection;
