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

function ProjecSection({ imgSrc, title, tags, isFirst, slug, ...rest }) {
  const [position, setPosition] = useState({ x: null, y: null });
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const updatePosition = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };
    const updatePagePosition = (e) => {
      const { pageX, pageY } = e;
      setPosition({ x: pageX, y: pageY });
    };

    window.addEventListener('DOMContentLoaded', updatePagePosition);
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

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
      {position.x && position.y && (
        <ReadMore x={position.x} y={position.y} style={{ zIndex: 1000000 }}>
          {t('fullproject')}
        </ReadMore>
      )}
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
