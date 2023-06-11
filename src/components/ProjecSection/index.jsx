import PropTypes from 'prop-types';
import {
  Backdrop,
  Content,
  Image,
  Tag,
  Tags,
  Title,
  Wrapper,
} from './ProjecSection.styles';

function ProjecSection({ image, title, tags, ...rest }) {
  const wrapperVariant = {
    visible: {
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Wrapper {...rest}>
      <Image src={image} alt="" />
      <Backdrop />
      <Content>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Title>{title}</Title>
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
