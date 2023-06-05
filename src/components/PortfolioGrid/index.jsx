import MyImage from '../MyImage';
import Paragraph from '../Paragraph';
import {
  GridContent,
  ImagesGrid,
  Wrapper,
  imagesSize,
} from './PortfolioGrid.styles';

const PortfolioGrid = ({ text, images, variant, ...rest }) => {
  const texts = text.split('#');
  return (
    <Wrapper {...rest}>
      <ImagesGrid variant={variant}>
        {images.map((image, index) => (
          <MyImage sizes={imagesSize(index, variant)} src={image} alt={'img'+index} key={'img'+index} />
        ))}
      </ImagesGrid>
      <GridContent>
        {texts?.map((txt, i) => (
          <Paragraph key={i + 2}>{txt}</Paragraph>
        ))}
      </GridContent>
    </Wrapper>
  );
};

export default PortfolioGrid;
