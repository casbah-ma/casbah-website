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
import { useEffect, useState } from 'react';
import { ReadMore } from '../BlogsSection/BlogsSection.styles';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import CursorTracker from '../CursorTracker';

function ProjecSection({ imgSrc, title, tags, isFirst, slug, ...rest }) {
  const router = useRouter();

  // useEffect(() => {

  //   const updatePagePosition = (e) => {
  //     const { pageX, pageY } = e;
  //     setPosition({ x: pageX, y: pageY });
  //   };

  //   window.addEventListener('DOMContentLoaded', updatePagePosition);

  //   return () => {
  //     window.removeEventListener('mousemove', updatePosition);
  //   };
  // }, []);

  const handleClick = () => {
    router.push(`/blogs/${slug}`);
  };
  return (
    <Wrapper
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleClick}
      {...rest}
    >
      <CursorTracker text="fullProject" />
      <ImageWrapper
        key={imgSrc}
        variants={isFirst ? imageVariant : imageVariant2}
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
