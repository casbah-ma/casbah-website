import PropTypes from 'prop-types';
import MyImage from '../MyImage';
import {
  CardInfo,
  CardText,
  CardTitle,
  CardWrapper,
  imagesSize,
} from './ProfileCard.styles';

const ProfileCard = ({ name, post, imgSrc, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <MyImage src={imgSrc} alt={name} sizes={imagesSize} objectFit="contain" />
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardText>{post}</CardText>
      </CardInfo>
    </CardWrapper>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ProfileCard;
