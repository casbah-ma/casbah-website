import PropTypes from 'prop-types';
import MyImage from '../MyImage';
import {
  CardInfo,
  CardMe,
  CardName,
  CardPost,
  CardText,
  CardWrapper,
  imagesSize,
  quoteSize,
} from './ProfileCardInfo.styles';
import QuoteIcon from 'public/icons/quote.png';

const ProfileCardInfo = ({ name, post, imgSrc, description }) => {
  return (
    <CardWrapper>
      <MyImage src={imgSrc} alt={name} sizes={imagesSize} objectFit="contain" />
      <CardInfo>
        <MyImage src={QuoteIcon} alt={name} sizes={quoteSize} />
        <CardText>{description}</CardText>
        <CardMe>
          <CardName>{name}</CardName>
          <CardPost>{post}</CardPost>
        </CardMe>
      </CardInfo>
    </CardWrapper>
  );
};

ProfileCardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ProfileCardInfo;
