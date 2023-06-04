import Header from '../Header';
import MyImage from '../MyImage';
import Tag from '../Tag';
import { Tags, Wrapper, imageSize } from './BlogHeaderSection.styles';

const BlogHeader = ({ title, description, image, tags }) => {
  return (
    <Wrapper>
      {tags && (
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={tag + index} title={tag} />
          ))}
        </Tags>
      )}
      <Header
        title={title}
        description={description}
        isVertical
        isSplited
        withLine
      />
      <MyImage src={image} alt={title} sizes={imageSize} />
    </Wrapper>
  );
};

export default BlogHeader;
